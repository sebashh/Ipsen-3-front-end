import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/Services/api-service';
import { Admin } from 'src/app/shared/Models/admin.model';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  name: String;
  password: String;
  admin: Admin;

  constructor(public apiService: RestApiService) { }

  ngOnInit() {
  }
  checkFields(){
    var button = document.getElementById('submit')
    if(this.name && this.password){
      button.removeAttribute('disabled')
    } else {
      button.setAttribute('disabled', 'disabled')
    }
  }
  
  registerAdmin(){
    this.admin = new Admin(this.name, this.password);
    console.log(this.admin);
    console.log(this.apiService.registerAdmin(this.admin));
  }

}

