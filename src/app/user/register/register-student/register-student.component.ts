import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RestApiService} from '../../../src/server/server/server';
import {Student} from '../../../shared/student.model';
import {Interest} from '../../../shared/interest.model';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  private email: FormGroup;
  private password: FormGroup;
  private student: Student;
  private interest: Interest;
  categories: string[] = [];
  studies: string[] = [];
  selectedCategories: string[];
  selectedStudies: string[];

  constructor(formBuilder: FormBuilder, public restApiService: RestApiService) {

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
    this.restApiService.getCategories().subscribe( (data) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        this.categories.push(data[i].name);
      }
    });

    this.restApiService.getStudies().subscribe( (data) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.length; i++) {
        this.studies.push(data[i].name);
      }
    });

  }

  submitStudent() {
    if (this.selectedStudies == null) {
      alert('You have to submit a study');
    } else {
      if (this.selectedStudies[1] != null) {
        alert('You can only submit one study');
      } else {
        this.student = new Student(this.selectedStudies[0], this.email.get('currentEmail').value, this.password.get('currentPassword').value);
        this.restApiService.postResource('ipsen3users/student', this.student, 'text');
        this.interest = new Interest(this.email.get('currentEmail').value, 1);
        this.restApiService.postResource('ipsen3interests/interests', this.interest, 'text');
      }
    }


  }

}
