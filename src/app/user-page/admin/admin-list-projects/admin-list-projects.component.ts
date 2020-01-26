import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/Services/api-service';

@Component({
  selector: 'app-admin-list-projects',
  templateUrl: './admin-list-projects.component.html',
  styleUrls: ['./admin-list-projects.component.css']
})
export class AdminListProjectsComponent implements OnInit {

  constructor(public restApi: RestApiService) { }
  AllProjects = [];

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects(){
    this.restApi.getAllProjects().subscribe((data)=>{
      for(var i = 0; i < data.length; i++){
        console.log(data);
        this.AllProjects = data;
      }
    })
  }

}
