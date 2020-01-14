import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {
  interests = [];
  interest = '';
  interestInput: string;

  private firstName: FormGroup;
  private lastName: FormGroup;
  private email: FormGroup;
  private password: FormGroup;
  private phoneNumber: FormGroup;
  private education: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.firstName = formBuilder.group({
      currentFirstName: new FormControl('',
        Validators.compose([Validators.required]))
    });

    this.lastName = formBuilder.group({
      currentLastName: new FormControl('',
        Validators.compose([Validators.required]))
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

    this.phoneNumber = formBuilder.group({
      currentPhoneNumber: new FormControl('',
        Validators.compose([Validators.required]))
    });

    this.education = formBuilder.group({
      currentEducation: new FormControl('',
        Validators.compose([Validators.required]))
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

}
