import {Component, NgModule, OnInit} from '@angular/core';
import {Project} from '../../shared/Models/project.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})

export class ClientComponent implements OnInit {
  project: Project;
  projects: Array<Project> = [];

  constructor() {

  }

  ngOnInit() {
  }

}
