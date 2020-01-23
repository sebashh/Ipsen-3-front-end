import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RestApiService} from '../../../src/server/server/server';
import {Student} from '../../../shared/Models/student.model';
import {CategoryService} from '../../../shared/Services/category.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  private email: FormGroup;
  private password: FormGroup;
  private student: Student;
  categories: string[] = [];
  studies: string[] = [];
  selectedCategories: string[];
  selectedStudies: string[];

  constructor(formBuilder: FormBuilder, public restApiService: RestApiService, public categoryService: CategoryService) {

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

  convertCategories(): number[] {
    const convertedCategories = [];
    this.selectedCategories.forEach(item => {
      convertedCategories.push(this.categoryService.getCategoryId(item));
    })
    return convertedCategories;
  }


  submitStudent() {
    if (this.selectedStudies == null) {
      alert('You have to submit a study');
    } else {
      if (this.selectedStudies[1] != null) {
        alert('You can only submit one study');
      } else {
        this.student = new Student(this.selectedStudies[0], this.convertCategories(), this.email.get('currentEmail').value, this.password.get('currentPassword').value);
        this.restApiService.postResource('ipsen3users/student', this.student, 'text');
      }
    }


  }


}
