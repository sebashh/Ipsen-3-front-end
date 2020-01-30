import { Component, OnInit } from '@angular/core';
import {Project} from "../../shared/Models/project.model";
import {RestApiService} from "../../shared/Services/api-service";
import { UserService } from 'src/app/shared/Services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['../teacher/teacher.component.css']
})
export class StudentComponent implements OnInit {

  studentName ="";
  studentDisplayName : string;
  projectsAmount : number;
  papersAmount: number;
  followedProjects: Array<Project> = [];
  projectsWithInterests: Array<Project> = [];

  constructor(private apiService: RestApiService, private userService: UserService) { }

  ngAfterViewOnInit(){

  }
  ngOnInit() {
    this.setStudentName();
    this.getRecentStatisticsUser();
    this.getProjectsWithInterests();
    this.getFollowedProjects();
  }


  getRecentStatisticsUser(){
    this.apiService.getRecentStatisticsStudent().subscribe((data) => {
      this.projectsAmount = data[0];
      this.papersAmount = data[1];
    });
  }


  getProjectsWithInterests() {
    this.apiService.getRecentlyCreatedProjectsWithInterest(this.userService.user.id).subscribe((data) => {
      this.projectsWithInterests = data;
    })
  }

  getFollowedProjects(){
    this.apiService.getRandomFollowedProjects(this.userService.user.id).subscribe((data) => {
      this.followedProjects = data;
    })
  }

  setStudentName(){
    this.apiService.getUserEmailById().subscribe((data) => {
      this.studentName = data;
      let subStrings = this.studentName.split("@");
      this.studentDisplayName = subStrings[0];
    });
  }

}
