import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isUserLoggedIn = false;

  constructor() { }

  ngOnInit() {
  }

  message(){
    console.log('Hello');
  }

  logIn(){
    this.isUserLoggedIn = true;
  }

  logOut(){
    this.isUserLoggedIn = false;
  }

  responsiveLogIn() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("myLogo");
    var z = document.getElementById("myTopnavi");
    if (x.className === "topnav") {
      x.className += " responsiveLogIn";
      y.className += " responsive";
      z.className += " responsiveLogIn";
    } else {
      x.className = "topnav";
      y.className = "logo";
      z.className = "topnav";
    }
  }
  responsiveLogOut(){
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("myLogo");
    var z = document.getElementById("myTopnavi");
    if (x.className === "topnav") {
      x.className += " responsiveLogOut";
      y.className += " responsive";
      z.className += " responsiveLogOut";
    } else {
      x.className = "topnav";
      y.className = "logo";
      z.className = "topnav";
    }
  }
}