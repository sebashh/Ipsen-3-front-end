import {Component, NgModule, OnInit} from '@angular/core';
import {Project} from "../../shared/project.model";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})

export class ClientComponent implements OnInit {
  project : Project;
  projects : Array<Project> = [];

  constructor() {

  }

  ngOnInit() {
  }

  createProject(){
    this.project = new Project(
      null,
      'project title',
      'description of the project description of the project description of the project description of the project',
      'study name',
      'category',
      123)
    this.projects.push(this.project);
  }

}
