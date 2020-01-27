import {Injectable, Output} from '@angular/core';
import {User} from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() user: User;
  timer: any;

  constructor() { }

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
    const timeLeft = Date.now() - user.exp.getTime();
    this.timer = setTimeout(this.removeUser, timeLeft);
  }

  removeUser(){
    this.user = null;
    clearTimeout(this.timer);
  }
}
