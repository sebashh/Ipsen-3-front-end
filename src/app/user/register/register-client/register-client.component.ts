import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
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

}
