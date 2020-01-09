import {AfterViewInit, Component, Input, OnInit, } from '@angular/core';
import {Project} from "../../shared/project.model";
import{ trigger, state, style, transition, animate, keyframes} from '@angular/animations'


@Component({
  selector: 'app-project-view-card',
  templateUrl: './project-view-card.component.html',
  styleUrls: ['./project-view-card.component.css']
})
export class ProjectViewCardComponent implements OnInit, AfterViewInit {
  @Input()
  project : Project;

  state:string = 'start';
  title : String;
  description : String;
  study : String;
  category : String;
  createdOn : String;
  constructor() {

  }

  ngOnInit() {
    this.title = this.project.getData().title;
    this.description = this.project.getData().description;
    this.study = this.project.getData().study;
    this.category = this.project.getData().category;
    this.createdOn = this.project.getData().createdOn.toDateString();
  }


  ngAfterViewInit(){
    this.state = 'loaded';
  }
}
