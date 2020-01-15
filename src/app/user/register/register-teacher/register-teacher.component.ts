import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RestApiService} from '../../../src/server/server/server';
import {Teacher} from '../../../shared/teacher.model';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {
  interests = [];
  interest = '';
  interestInput: string;
  private email: FormGroup;
  private password: FormGroup;
  private study: FormGroup;
  private teacher: Teacher;

  constructor(formBuilder: FormBuilder, public restApiService: RestApiService) {
    this.study = formBuilder.group({
      currentStudy: new FormControl('', [
        Validators.required
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

  submitTeacher() {
    this.teacher = new Teacher(this.study.get('currentStudy').value, this.email.get('currentEmail').value, this.password.get('currentPassword').value);
    this.restApiService.postResource('ipsen3users/teacher', this.teacher, 'text');
  }
}
