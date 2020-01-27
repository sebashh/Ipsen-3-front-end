import { Component, OnInit } from '@angular/core';
import {Project} from "../../shared/Models/project.model";
import {RestApiService} from "../../shared/Services/api-service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['../teacher/teacher.component.css']
})
export class StudentComponent implements OnInit {

  studentName ="jaime@student.hsleiden.nl";
  studentDisplayName : string;
  projectsAmount : number;
  papersAmount: number;
  followedProjects: Array<Project> = [];
  projectsWithInterests: Array<Project> = [];

  constructor(private apiService: RestApiService) { }

  ngOnInit() {
    this.setStudentName();
    this.getRecentStatisticsUser();
    this.getProjectsWithInterests();
    this.getFollowedProjects();
  }


  getRecentStatisticsUser(){
    this.apiService.getRecentStatisticsStudent(this.studentName).subscribe((data) => {
      console.log(data);
      this.projectsAmount = data[0];
      this.papersAmount = data[1];
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

  setStudentName(){
    let subStrings = this.studentName.split("@");
    this.studentDisplayName = subStrings[0];
    console.log(subStrings[0])
  }

}
