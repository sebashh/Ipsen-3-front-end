import { Component, OnInit } from '@angular/core';
import {Project} from '../../shared/project.model';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './project-scrollbar.component.html',
  styleUrls: ['./project-scrollbar.component.css']
})
export class ProjectScrollbarComponent implements OnInit {

  projects: Project[] = [];
  constructor() {
  }

  ngOnInit() {
    this.projects.push(new Project(1, 'title1', 'description', 'study', 'category', new Date(), 1));
    this.projects.push(new Project(1, 'title2', 'description', 'study', 'category', new Date(), 1));
    this.projects.push(new Project(1, 'title3', 'description', 'study', 'category', new Date(), 1));
    this.projects.push(new Project(1, 'title4', 'description', 'study', 'category', new Date(), 1));
    this.projects.push(new Project(1, 'title5', 'description', 'study', 'category', new Date(), 1));
  }

}
