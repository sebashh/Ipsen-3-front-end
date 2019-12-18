import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor() { }

  projects = ["Project 1",
                "Project 2",
                "Project 3",
                "Project 4",
                "Project 5",
                "Project 6",
                "Project 7",
                "Project 8",
                "Project 9",
                "Project 10",];

   projectSummary = ["Summary of project 1",
                     "Summary of project 2",
                     "Summary of project 3",
                     "Summary of project 4",
                     "Summary of project 5",
                     "Summary of project 6",
                     "Summary of project 7",
                     "Summary of project 8",
                     "Summary of project 9",
                     "Summary of project 10"];

    currentProject;
    maxProjects = 10;
    index ;

    project1;
    project2;
    project3;
    project4;
    project5;

    project1Summary;
    project2Summary;
    project3Summary;
    project4Summary;
    project5Summary;

    projectAmount = 212;
    userAmount = 533;
    studentAmount = 312;
    teacherAmount = 88;
    clientAmount = 133;

    ngOnInit() {
      this.project1 = this.projects[8];
      this.project2 = this.projects[9];
      this.project3 = this.projects[0];
      this.project4 = this.projects[1];
      this.project5 = this.projects[2];
      this.project1Summary = this.projectSummary [8];
      this.project2Summary  = this.projectSummary [9];
      this.project3Summary  = this.projectSummary [0];
      this.project4Summary  = this.projectSummary [1];
      this.project5Summary  = this.projectSummary [2];
      this.currentProject = this.projects.indexOf(this.project3);
    }


    determineIndex(location){
      this.index = ((this.maxProjects-1) + this.currentProject + location)% this.maxProjects;
      return this.index
    }

    leftScroll(){
      this.project1 = this.projects[this.determineIndex(-2)];
      this.project2 = this.projects[this.determineIndex(-1)];
      this.project3 = this.projects[this.determineIndex(0)];
      this.project4 = this.projects[this.determineIndex(1)];
      this.project5 = this.projects[this.determineIndex(2)];
      this.project1Summary = this.projectSummary[this.determineIndex(-2)];
      this.project2Summary = this.projectSummary[this.determineIndex(-1)];
      this.project3Summary = this.projectSummary[this.determineIndex(0)];
      this.project4Summary = this.projectSummary[this.determineIndex(1)];
      this.project5Summary = this.projectSummary[this.determineIndex(2)];
      this.currentProject = this.projects.indexOf(this.project3);
    }

    rightScroll(){
      this.project1 = this.projects[this.determineIndex(0)];
      this.project2 = this.projects[this.determineIndex(1)];
      this.project3 = this.projects[this.determineIndex(2)];
      this.project4 = this.projects[this.determineIndex(3)];
      this.project5 = this.projects[this.determineIndex(4)];
      this.project1Summary = this.projectSummary[this.determineIndex(0)];
      this.project2Summary = this.projectSummary[this.determineIndex(1)];
      this.project3Summary = this.projectSummary[this.determineIndex(2)];
      this.project4Summary = this.projectSummary[this.determineIndex(3)];
      this.project5Summary = this.projectSummary[this.determineIndex(4)];
      this.currentProject = this.projects.indexOf(this.project3);
    }

}
