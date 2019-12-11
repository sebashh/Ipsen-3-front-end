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

  myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("myLogo");
    if (x.className === "topnav") {
      x.className += " responsive";
      y.className += " responsive";
    } else {
      x.className = "topnav";
      y.className = "logo";
    }
  }
}