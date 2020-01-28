import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginModel} from '../Models/login.model';
import {log} from 'util';
import {RestApiService} from "../Services/api-service";
import {UserService} from "../Services/user.service";
import {User} from "../Models/user.model";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isUserLoggedIn = false;
  UserIsAdmin = false;
  loginModel: LoginModel;
  email: string;
  password: string;
  notificationVisable: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, public restApi: RestApiService, private userService: UserService) {
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
    this.loginModel = new LoginModel(this.email, this.password);
    this.restApi.loginUser(this.loginModel).subscribe(item =>
    this.userService.setCurrentUser(<User>item));
    
    
  } 

  logOut() {
    this.isUserLoggedIn = false;
    this.userService.removeUser();
  }

  toggleNotifications() {
    this.notificationVisable = !this.notificationVisable;
  }

  getUserPath(): string {
    let path = '/home';
    if(this.userService.user) path = path + '/' + this.userService.user.role;
    this.UserIsAdmin = this.userService.isAuthorized(['admin'])
    this.isUserLoggedIn = this.userService.isAuthorized(['student', 'teacher', 'client', 'admin']);
    console.log("isUserLoggedIn? ", this.isUserLoggedIn);
    return path;
  }
}
