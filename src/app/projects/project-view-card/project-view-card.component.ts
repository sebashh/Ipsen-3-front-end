import {AfterViewInit, Component, Input, OnInit, } from '@angular/core';
import {Project} from '../../shared/project.model';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';


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
  summary : String;
  study : String;
  category : String;
  createdOn : String;
    constructor() {

  }

  ngOnInit() {
    this.title = this.project.title;
    this.summary = this.project.summary;
    this.study = this.project.study;
    this.category = this.project.category;
    this.createdOn = this.convertUnixToDate(this.project.createdOn);
  }

  convertUnixToDate(date: any){
    var myDate = new Date(date*1000);
    console.log(myDate.toLocaleString());
    return myDate.toLocaleString();
  }
  ngAfterViewInit() {
    this.state = 'loaded';
  }
}
