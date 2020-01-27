import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../shared/Services/api-service";
import {Project} from "../../shared/Models/project.model";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacherName ="Test@Teacher.com";
  teacherDisplayName : string;
  projectsAmountInterests : number;
  projectsAmountUploadedTo : number;
  projectViews: number;
  followedProjects: Array<Project> = [];
  projectsWithInterests: Array<Project> = [];

  constructor(private apiService: RestApiService) { }

  ngOnInit() {
    this.setTeacherName();
    this.getRecentStatisticsTeacher();
    this.getProjectsWithInterests();
    this.getFollowedProjects();
  }


  getRecentStatisticsTeacher(){
    this.apiService.getRecentStatisticsTeacher(this.teacherName).subscribe((data) => {
      console.log(data);
      this.projectsAmountInterests = data[0];
      this.projectsAmountUploadedTo = data[1];
      this.projectViews = data[2];
    });
  }


  getProjectsWithInterests() {
    this.apiService.getRecentlyCreatedProjectsWithInterest(5).subscribe((data) => {
      this.projectsWithInterests = data;
    })
  }

  getFollowedProjects(){
    this.apiService.getRandomFollowedProjects(5).subscribe((data) => {
      this.followedProjects = data;
    })
  }

  setTeacherName(){
    let subStrings = this.teacherName.split("@");
    this.teacherDisplayName = subStrings[0];
    console.log(subStrings[0])
  }

}
