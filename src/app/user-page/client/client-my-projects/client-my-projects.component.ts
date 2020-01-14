import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectViewCardComponent } from 'src/app/projects/project-view-card/project-view-card.component';
import { DatePipe } from '@angular/common';
import { MockProject } from './mockProject';


export interface Tile {
  text: string;
}



@Component({
  selector: 'app-client-my-projects',
  templateUrl: './client-my-projects.component.html',
  styleUrls: ['./client-my-projects.component.css']
})

export class ClientMyProjectsComponent implements OnInit {
  
  myProject = new MockProject;

  project = new ProjectViewCardComponent;
  constructor() { }

  tiles: ProjectViewCardComponent[] = [];
  ngOnInit() {
    this.filInTheTiles(3);
  }

  addProject(){
    this.tiles.push(this.project);
  }
  filInTheTiles(amount){
    for(var i = 0;i < amount; i++){
      this.tiles.push(this.project);
    }
    console.log(this.tiles);
  }
  
}
