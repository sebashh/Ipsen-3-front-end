import {AfterViewInit, Component, Input, OnInit, } from '@angular/core';
import {Project} from '../../shared/Models/project.model';
import {ProjectService} from '../../shared/Services/project.service';
import {log} from 'util';

@Component({
  selector: 'app-project-view-card',
  templateUrl: './project-view-card.component.html',
  styleUrls: ['./project-view-card.component.css']
})
export class ProjectViewCardComponent implements OnInit, AfterViewInit {
  @Input()
  project : Project;

  state:string = 'start';

    constructor(private projectService: ProjectService) {

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

  setCurretProject() {
      log("setting the new project");
    this.projectService.changeCurrentProject(this.project);
  }
}
