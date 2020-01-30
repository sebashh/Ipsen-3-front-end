import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../../shared/Models/student.model';
import {CategoryService} from '../../../shared/Services/category.service';
import {RestApiService} from "../../../shared/Services/api-service";
import {Category} from "../../../shared/Models/category.model";
import {StudyService} from "../../../shared/Services/study.service";
import {Study} from "../../../shared/Models/study.model";
import {Router} from "@angular/router";
import { LoginModel } from 'src/app/shared/Models/login.model';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  private email: FormGroup;
  private password: FormGroup;
  private student: Student;
  categories: Category[] = [];
  studies: Study[] = [];
  selectedCategories: Category[];
  selectedStudies: Study[];
  loginModel: LoginModel;

  constructor(formBuilder: FormBuilder,
              public restApiService: RestApiService,
              public categoryService: CategoryService,
              public studyService: StudyService,
              private router: Router
  ) {

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
    this.categories = this.categoryService.categories;
    this.studies = this.studyService.studies;
  }

  getCategoryIdList(): number[] {
    const convertedCategories = [];
    this.selectedCategories.forEach(item => {
      convertedCategories.push(item.id);
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
        this.student = new Student(this.selectedStudies[0].id, this.getCategoryIdList(), this.email.get('currentEmail').value, this.password.get('currentPassword').value);

        this.restApiService.registerUser('student', this.student).subscribe((data) => {
          if(data) {
            window.alert('register successful!');
            this.router.navigateByUrl('/home');
          }
        });


      }
    }
  }

}
