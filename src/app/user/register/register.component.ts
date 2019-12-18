import {Component} from '@angular/core';

@Component({
  selector: 'app-register-choose-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
  student = false;
  teacher = false;
  client = false;

  constructor() { }

  clientSelected() {
    this.client = true;
    this.student = false;
    this.teacher = false;
  }

  teacherSelected() {
    this.teacher = true;
    this.student = false;
    this.client = false;
  }

  studentSelected() {
    this.student = true;
    this.teacher = false;
    this.client = false;
  }





}
