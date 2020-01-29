import { Component, OnInit } from '@angular/core';
import {Statistics} from "../../shared/Models/statistics.model";
import {RestApiService} from "../../shared/Services/api-service";
import {Project} from "../../shared/Models/project.model";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  statistics: Statistics;

  projects: Array<Project> = [];

  constructor(public restApi: RestApiService) { }
    projectAmount : number;
    userAmount : number;
    studentAmount : number;
    teacherAmount : number;
    clientAmount : number;

    ngOnInit() {
      this.getStatistics();
      this.getPopularProjects();
    }

    getPopularProjects(){
      this.restApi.getTopPopularProjects().subscribe((data)=>{
        this.projects = data;
        console.log("data: ", data)
        console.log("statistics: ", data)
      })
    }

    getStatistics() : void {
      this.restApi.getStatistics().subscribe((data)=>{
        this.statistics= data;
        console.log("data: ", data)
        console.log("statistics: ", data)
        this.setStatistics()
      })

    }

    setStatistics() : void {
        this.projectAmount = this.statistics.projectAmount;
        this.userAmount = this.statistics.userAmount;
        this.studentAmount = this.statistics.studentAmount;
        this.teacherAmount = this.statistics.teacherAmount;
        this.clientAmount = this.statistics.clientAmount;
    }

}
