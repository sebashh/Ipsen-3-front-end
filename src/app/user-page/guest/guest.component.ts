import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor() { }
    maxProjects = 10;
    projectAmount = 212;
    userAmount = 533;
    studentAmount = 312;
    teacherAmount = 88;
    clientAmount = 133;

    ngOnInit() {
    }

}
