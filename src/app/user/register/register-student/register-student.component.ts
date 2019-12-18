import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
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
