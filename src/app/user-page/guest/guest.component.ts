import { Component, OnInit } from '@angular/core';
import {Statistics} from "../../shared/Models/statistics.model";
import {RestApiService} from "../../shared/Services/api-service";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  statistics: Statistics

  constructor(public restApi: RestApiService) { }
    projectAmount : number;
    userAmount : number;
    studentAmount : number;
    teacherAmount : number;
    clientAmount : number;

    ngOnInit() {
      this.getStatistics()

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
