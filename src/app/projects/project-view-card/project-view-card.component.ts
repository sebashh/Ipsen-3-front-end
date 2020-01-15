import {AfterViewInit, Component, Input, OnInit, } from '@angular/core';
import {Project} from '../../shared/project.model';

@Component({
  selector: 'app-project-view-card',
  templateUrl: './project-view-card.component.html',
  styleUrls: ['./project-view-card.component.css']
})
export class ProjectViewCardComponent implements OnInit, AfterViewInit {
  @Input()
  project : Project;

  state:string = 'start';
  
    constructor() {

  }

  ngOnInit() {
    // this.title = this.project.title;
    // this.summary = this.project.summary;
    // this.study = this.project.study;
    // this.category = this.project.category;
  }

  ngAfterViewInit() {
    this.state = 'loaded';
  }
}
