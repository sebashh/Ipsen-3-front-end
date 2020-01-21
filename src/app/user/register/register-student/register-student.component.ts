import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../../shared/Models/student.model';
import {RestApiService} from "../../../shared/Services/api-service";

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  interests = [];
  interest = '';
  interestInput: string;
  private study: FormGroup;
  private email: FormGroup;
  private password: FormGroup;
  private student: Student;

  constructor(formBuilder: FormBuilder, public restApiService: RestApiService) {
    this.study = formBuilder.group({
      currentStudy: new FormControl('', [
        Validators.required,
      ])
    });

    this.email = formBuilder.group({
      currentEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });

    this.password = formBuilder.group({
      currentPassword: new FormControl('',
        Validators.compose([Validators.required, Validators.minLength(6)]))
    });

  }

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    this.interests.push(event.target.value);
    this.interest = event.target.value;
    this.interestInput = '';
    console.log(this.interests);
  }

  submitStudent() {
    this.student = new Student(this.study.get('currentStudy').value, this.email.get('currentEmail').value, this.password.get('currentPassword').value);
    this.restApiService.postResource('ipsen3users/student', this.student, 'text');
  }

}
