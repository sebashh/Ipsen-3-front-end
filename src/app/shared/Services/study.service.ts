import { Injectable, Output, EventEmitter } from '@angular/core';
import {RestApiService} from "./api-service";
import {Study} from "../Models/study.model";

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  refresh() {
    this.getAllStudies();
  }
  studies: Study[];

  @Output() event= new EventEmitter<Study[]>();

  public init(){
    this.getAllStudies();
  }

  constructor(private apiService: RestApiService) {
  }

  getAllStudies(){
    this.apiService.getStudies().subscribe(item =>{
      this.studies = item as Study[];
      this.event.emit(this.studies);
    })
  }

  getStudyId(name: string): any{
    this.studies.forEach(item =>{
      if(item.name == name){
        return item.id;
      }
    });
    return null;
  }
}
