import {Component, ElementRef, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js';
import {RestApiService} from "../../shared/Services/api-service";
import {Project} from "../../shared/Models/project.model";
import {dateStatistic} from "../../shared/Models/dateStatistic.model";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {


  @ViewChild('lineChart',{static:false}) lineChartRef: ElementRef;
  @ViewChild('donutChart',{static:false}) donutChartRef: ElementRef;
  @ViewChild('barChart',{static:false}) barChartRef: ElementRef;
  @ViewChild('stackedBarChart',{static:false}) stackedBarChartRef : ElementRef;

  lineChart : Chart;
  donutChart : Chart;
  barChart : Chart;
  stackedBarChart : Chart;

  days = [];
  usersTypes = ["Student","Teacher","Client", "Admin"];

  projects = [];
  papers = [];
  userData = [];
  viewData = [];
  loginStudent = [];
  loginTeacher = [];
  loginClient = [];

  adminName ="";
  adminDisplayName : string;



  constructor(public restApi: RestApiService) {
  }

  ngOnInit() {
    this.setAdminName();
    this.getProjectLineStatistics();
    this.getUserStatistics();
    this.getViewStatistics();
    this.getLoginStatistics();
  }

  ngAfterViewInit(){
  }


  setAdminName(){
    this.restApi.getUserEmailById().subscribe((data) => {
      this.adminName = data;
      let subStrings = this.adminName.split("@");
      this.adminDisplayName = subStrings[0];
    });
  }

  getProjectLineStatistics(){
    let projectStatisticApi = this.restApi.getAdminSpecificStatistics("project");
    let paperStatisticApi = this.restApi.getAdminSpecificStatistics("paper");
    forkJoin([projectStatisticApi,paperStatisticApi]).subscribe( results =>{
      this.setStatisticValues(results[0], this.projects);
      this.setLabelNames(results[0]);
      this.setStatisticValues(results[1], this.papers);
      this.createLineGraphBaseStatistics();
      });
  }

  getUserStatistics(){
    this.restApi.getStatistics().subscribe((data)=>{
      this.userData.push(data.studentAmount);
      this.userData.push(data.teacherAmount);
      this.userData.push(data.clientAmount);
      this.userData.push(data.userAmount - data.studentAmount - data.teacherAmount - data.clientAmount);
      this.createDonutGraphUsers();
    })
  }

  getViewStatistics(){
    this.restApi.getAdminSpecificStatistics("views").subscribe((data)=>{
      console.log(data);
      this.setStatisticValues(data, this.viewData);
      this.createBarGraphViews();
    })
  }

  getLoginStatistics(){
    let studentStatisticsApi = this.restApi.getAdminSpecificStatistics("login/student");
    let teacherStatisticsApi = this.restApi.getAdminSpecificStatistics("login/teacher");
    let clientStatisticsApi = this.restApi.getAdminSpecificStatistics("login/student");
    forkJoin([studentStatisticsApi, teacherStatisticsApi, clientStatisticsApi]).subscribe(results =>{
      this.setStatisticValues(results[0], this.loginStudent);
      this.setStatisticValues(results[1], this.loginTeacher);
      this.setStatisticValues(results[2], this.loginClient);
      this.createStackedBarGraphLogin();
    })
  }


  setStatisticValues(data, valueArray: any){
    for (let obj of data) {
      for (let key in obj) {
        if (key == "amount"){
          valueArray.push(obj[key]);
        }
      }
    }
  }

  setLabelNames(data){
    for (let obj of data) {
      for (let key in obj) {
        if (key == "date") {
          this.days.push(obj[key]);
        }
      }
    }
  }


  createLineGraphBaseStatistics(){
    this.lineChart = new Chart(this.lineChartRef.nativeElement.getContext('2d'),{
      type: 'line',
      data: {
        labels: this.days,
        datasets: [
          {
            data: this.projects,
            label: "Projects",
            borderColor: "purple",
            fill: false
          },
          {
            data: this.papers,
            label: "Papers",
            borderColor: "red",
            fill: false
          },
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Created Projects and uploaded papers',
          fontSize: 24
        },
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 1
            }
          }]
        }
      }
    });
  }

  createDonutGraphUsers(){
    this.donutChart = new Chart(this.donutChartRef.nativeElement.getContext("2d"),{
      type: 'doughnut',
      data: {
        labels: this.usersTypes,
        datasets: [{
          backgroundColor: [
            "yellow",
            "green",
            "orange",
            "blue"
          ],
          data: this.userData
        }],
      },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'User spread',
            fontSize: 24
          }}
    })
  }

  createBarGraphViews(){
    this.barChart = new Chart(this.barChartRef.nativeElement.getContext('2d'),{
      type: 'bar',
      data: {
        labels: this.days,
        datasets: [
          {
            label: 'Amount',
            data: this.viewData,
            backgroundColor: [
              "blue",
              "red",
              "green",
              "yellow",
              "purple",
              "green",
              "black"
            ],
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Views',
          fontSize: 24
        },
      legend: {
          display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1
          }
        }]
      }}
    })
  }

  createStackedBarGraphLogin(){
    this.stackedBarChart = new Chart(this.stackedBarChartRef.nativeElement.getContext('2d'),{
      type: 'bar',
      data: {
        labels: this.days,
        datasets: [
          {
            label: this.usersTypes[0],
            data: this.loginStudent,
            backgroundColor: "blue"
          },
          {
            label: this.usersTypes[1],
            data: this.loginTeacher,
            backgroundColor: "red"
          },
          {
            label: this.usersTypes[2],
            data: this.loginClient,
            backgroundColor: "green"
          }
          ]
      },
      options: {
      responsive: true,
        title: {
        display: true,
          text: 'Number of logins',
          fontSize: 24
      },
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true , ticks: {stepSize: 1}}]
        }}
    })
  }

}
