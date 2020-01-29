import { Component, OnInit } from '@angular/core';
import {Project} from "../../../shared/Models/project.model";
import {RestApiService} from "../../../shared/Services/api-service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  clientName ="";
  clientDisplayName : string;
  projectsViewsAmount : number;
  papersUploadAmount : number;
  totalProjectsClient : number;
  recentlyUpdatedProjects: Array<Project> = [];
  topViewedProjects: Array<Project> = [];

  constructor(private apiService: RestApiService) { }

  ngOnInit() {
    this.setClientName();
    this.getRecentStatisticsClient();
    this.getTopViewedProjects();
    this.getRecentlyUpdatedProjects();
  }


  getRecentStatisticsClient(){
    this.apiService.getRecentStatisticsClient().subscribe((data) => {
      console.log(data);
      this.projectsViewsAmount = data[0];
      this.papersUploadAmount = data[1];
      this.totalProjectsClient = data[2];
    });
  }


  getTopViewedProjects() {
    this.apiService.getTopViewedProjectsClient().subscribe((data) => {
      this.topViewedProjects = data;
    })
  }

  getRecentlyUpdatedProjects(){
    this.apiService.getRecentlyUpdatedProjects().subscribe((data) => {
      this.recentlyUpdatedProjects = data;
    })
  }

  setClientName(){
    this.apiService.getUserEmailById().subscribe((data) => {
      this.clientName = data;
      let subStrings = this.clientName.split("@");
      this.clientDisplayName = subStrings[0];
    });
  }


}
