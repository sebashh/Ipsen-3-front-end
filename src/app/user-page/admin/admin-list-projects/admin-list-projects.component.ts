import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/Services/api-service';
import { Router } from '@angular/router';
import { Project } from 'src/app/shared/Models/project.model';

@Component({
  selector: 'app-admin-list-projects',
  templateUrl: './admin-list-projects.component.html',
  styleUrls: ['./admin-list-projects.component.css']
})
export class AdminListProjectsComponent implements OnInit {
  showComponent: boolean;

  constructor(public restApi: RestApiService,public router: Router) { }
  AllProjects = [];
  edit = false;
  divIndex;

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects(){
    this.restApi.getAllProjects().subscribe((data)=>{
      for(var i = 0; i < data.length; i++){
        this.AllProjects = data;
      }
    })
    
  }

  delete(id: number, title: String){
    var result = confirm("Are you sure you want to delete "+title+"?");
    console.log(result);

    console.log(id);
    if(result){
      this.restApi.deleteProject(id).subscribe();;
      this.getAllProjects();
    }
  }

  editRow(id: number) {
    console.log(id);
    this.edit = true;
    this.divIndex = id;

  }

  updateProject(project: Project) {
    this.restApi.updateProject(project).subscribe();
    // this.refreshPage();
    this.cancel();
  }


  cancel() {
    this.edit = false;
    this.refreshPage();
  }

  refreshPage() {
    this.getAllProjects();
    this.router.navigate(["/admin/projects"]);
  }
}
