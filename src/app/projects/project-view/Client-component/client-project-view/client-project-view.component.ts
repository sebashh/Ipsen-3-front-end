import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../shared/Models/user.model";
import {Teacher} from "../../../../shared/Models/teacher.model";
import {RestApiService} from "../../../../shared/Services/api-service";
import {Project} from "../../../../shared/Models/project.model";
import {Paper} from "../../../../shared/Models/paper.model";

@Component({
  selector: 'app-client-project-view',
  templateUrl: './client-project-view.component.html',
  styleUrls: ['./client-project-view.component.css']
})
export class ClientProjectViewComponent implements OnInit {
  teacherAccess: any[];
  teacherRequests: any[];
  @Input() project:Project;
  @Input() papers:Paper[];
  @Input() currentOwner:boolean;

  constructor(private apiService: RestApiService) { }

  ngOnInit() {
    if(this.currentOwner) this.loadData();
  }

  loadData(){
    this.apiService.getAllAccessRequests(this.project.projectId).subscribe(item =>{
      this.teacherRequests = item;
    })
    this.apiService.getAllAccessMembers(this.project.projectId).subscribe(item =>{
      this.teacherAccess = item;
    })
  }

  getPaperAmount(id: any) {
    let count = 0;
    this.papers.forEach(item => {
        if (item.uploadedBy == id) count++;
      }
    );
    return count;
  }

  acceptRequest(id: number) {
    this.apiService.acceptAccessRequest(this.project.projectId,id);
  }

  denyRequest(id: number) {
    this.apiService.denyAccessRequest(this.project.projectId,id);
  }
}
