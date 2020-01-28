import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../shared/Services/api-service";
import {Project} from "../../shared/Models/project.model";
import {UserService} from "../../shared/Services/user.service";

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

  constructor(private apiService: RestApiService, private userService: UserService) { }

  ngOnInit() {
    this.setTeacherName();
    this.getRecentStatisticsTeacher();
    this.getProjectsWithInterests();
    this.getFollowedProjects();
  }


  getRecentStatisticsTeacher(){
    this.apiService.getRecentStatisticsTeacher().subscribe((data) => {
      console.log(data);
      this.projectsAmountInterests = data[0];
      this.projectsAmountUploadedTo = data[1];
      this.projectViews = data[2];
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

  setTeacherName(){
    let subStrings = this.teacherName.split("@");
    this.teacherDisplayName = subStrings[0];
    console.log(subStrings[0])
  }

}
