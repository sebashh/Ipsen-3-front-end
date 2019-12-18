import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {
  interests = [];
  interest = '';
  interestInput: string;

  constructor() { }

  ngOnInit() {

  }

  onKey(event: any) { // without type info
    this.interests.push(event.target.value);
    this.interest = event.target.value;
    this.interestInput = '';
    console.log(this.interests);
  }

}
