import { Injectable } from '@angular/core';
import {Category} from "../Models/category.model";
import {RestApiService} from "./api-service";
import {Study} from "../Models/study.model";

@Injectable({
  providedIn: 'root'
})
export class StudyService {
  studies: Study[];

  public init(){
    this.apiService.getStudies().subscribe(item =>{
      this.studies = item as Study[];
    })
  }

  constructor(private apiService: RestApiService) {
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
