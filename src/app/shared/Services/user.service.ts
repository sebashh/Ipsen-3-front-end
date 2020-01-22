import {Injectable, Output} from '@angular/core';
import {User} from "../Models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() user: User;

  constructor() { }

  setCurrentUser(user: User){
    console.log(user);
    this.user = user;
  }
}
