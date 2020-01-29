import {Injectable, Output} from '@angular/core';
import {User} from '../Models/user.model';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() user: User;
  timer: any;

  constructor(private router: Router) { }

  isAuthorized(roles: string[]){
    let userRole;
    userRole = (!this.user? 'guest' : this.user.role);
    return roles.some(role => {
      if(role == userRole){
        return true;
      }
    });
  }

  setCurrentUser(user: User) {
    this.user = user;
    this.router.navigateByUrl('/home/' + user.role);
    const timeLeft = user.exp - Date.now();
    this.timer = setTimeout(this.removeUser, timeLeft);
  }

  removeUser(){
    this.user = null;
    this.router.navigateByUrl('/home');
    clearTimeout(this.timer);
  }
}
