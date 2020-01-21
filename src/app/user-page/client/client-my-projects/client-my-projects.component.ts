import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/shared/Models/project.model';
import {RestApiService} from "../../../shared/Services/api-service";

@Component({
  selector: 'app-client-my-projects',
  templateUrl: './client-my-projects.component.html',
  styleUrls: ['./client-my-projects.component.css']
})

export class ClientMyProjectsComponent implements OnInit {

  allMyProjects = [];
  constructor(public restApi: RestApiService) { }
  ngOnInit() {
    this.getAllProjects(2);
  }

  getAllProjects(client_id: number){
    this.restApi.getAllMyProjects(client_id).subscribe((data)=>{
      for(var i = 0; i < data.length; i++){
        this.allMyProjects = data;
      }
    })
  }
}
