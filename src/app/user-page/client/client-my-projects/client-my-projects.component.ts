import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectViewCardComponent } from 'src/app/projects/project-view-card/project-view-card.component';
import { MockProject } from './mockProject';
import { RestApiService } from 'src/app/src/server/server/server';
import { Project } from 'src/app/shared/project.model';


export interface Tile {
  text: string;
}

@Component({
  selector: 'app-client-my-projects',
  templateUrl: './client-my-projects.component.html',
  styleUrls: ['./client-my-projects.component.css']
})

export class ClientMyProjectsComponent implements OnInit {

  myProject = new Project();
  project = new ProjectViewCardComponent;
  constructor(public restApi: RestApiService) { }

  tiles: ProjectViewCardComponent[] = [];
  ngOnInit() {
    
    this.restApi.getMyProject(2).subscribe((data)=>{
        this.myProject = data;
        console.log("data: ", data)
        console.log("myProject: ", data)
        this.tiles.push(this.project);
        })
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
