import {EventEmitter, Injectable, Output} from '@angular/core';
import {Project} from "../Models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  @Output() public fire: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  changeCurrentProject(project: Project){
    this.fire.emit(project);
  }
}
