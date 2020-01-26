import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Client} from '../../../shared/Models/client.model';
import {RestApiService} from "../../../shared/Services/api-service";

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  private companyName: FormGroup;
  private companyDescription: FormGroup;
  private email: FormGroup;
  private password: FormGroup;
  private client: Client;

  constructor(formBuilder: FormBuilder, public restApiService: RestApiService) {
    this.companyName = formBuilder.group({
      currentCompanyName: new FormControl('',
        Validators.compose([Validators.required]))
    });

    this.companyDescription = formBuilder.group({
      currentCompanyDescription: new FormControl('',
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
  }



  ngOnInit() {

  }

  // submitClient() {
  //   this.client = new Client(null, this.companyName.get('currentCompanyName').value, this.companyDescription.get('currentCompanyDescription').value, this.email.get('currentEmail').value, this.password.get('currentPassword').value);
  //   this.restApiService.postResource('ipsen3users/client', this.client, 'text');
  // }
}
