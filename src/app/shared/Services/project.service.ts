import {EventEmitter, Injectable, Output} from '@angular/core';
import {Project} from "../Models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  @Output() public project: Project;
  constructor() { }

  changeCurrentProject(project: Project){
    this.project = project;
  }

  getCurrentProject() {
    return this.project;
  }
}
