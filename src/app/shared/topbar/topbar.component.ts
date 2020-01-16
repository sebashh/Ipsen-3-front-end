import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {RestApiService} from '../../src/server/server/server';
import {LoginModel} from '../login.model';
import {log} from 'util';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isUserLoggedIn = false;
  loginModel: LoginModel;
  email: string;
  password: string;

  constructor(private router: Router, private route: ActivatedRoute, public restApi: RestApiService) {

  }
  navigate(path) {
    this.router.navigate([{outlets: {primary: path, sidemenu: path}}],
                         {relativeTo: this.route});
}

  ngOnInit() {
  }

  message() {
    console.log('Hello');
  }

  responsiveLogIn() {
    let x = document.getElementById('myTopnav');
    let y = document.getElementById('myLogo');
    let z = document.getElementById('myTopnavi');
    if (x.className === 'topnav') {
      x.className += ' responsiveLogIn';
      y.className += ' responsive';
      z.className += ' responsiveLogIn';
    } else {
      x.className = 'topnav';
      y.className = 'logo';
      z.className = 'topnav';
    }
  }
  responsiveLogOut() {
    let x = document.getElementById('myTopnav');
    let y = document.getElementById('myLogo');
    let z = document.getElementById('myTopnavi');
    if (x.className === 'topnav') {
      x.className += ' responsiveLogOut';
      y.className += ' responsive';
      z.className += ' responsiveLogOut';
    } else {
      x.className = 'topnav';
      y.className = 'logo';
      z.className = 'topnav';
    }
  }

  logIn() {
    this.isUserLoggedIn = true;
    // log(this.email);
    // this.loginModel = new LoginModel(this.email, this.password);
    // console.log(this.restApi.postResource('authentication/auth', this.loginModel, 'any'));
  }

  logOut() {
    this.isUserLoggedIn = false;
  }

}
