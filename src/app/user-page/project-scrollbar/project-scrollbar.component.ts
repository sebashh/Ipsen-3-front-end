import { Component, OnInit } from '@angular/core';
import {Project} from '../../shared/project.model';
import {RestApiService} from "../../src/server/server/server";

@Component({
  selector: 'app-scrollbar',
  templateUrl: './project-scrollbar.component.html',
  styleUrls: ['./project-scrollbar.component.css']
})
export class ProjectScrollbarComponent implements OnInit {

  projects: Array<Project> = [];
  constructor(public restApi: RestApiService) {
  }

  ngOnInit() {
    this.restApi.getTopPopularProjects().subscribe((data)=>{
      this.projects = data;
      console.log("data: ", data)
      console.log("statistics: ", data)
    })
  }

}
