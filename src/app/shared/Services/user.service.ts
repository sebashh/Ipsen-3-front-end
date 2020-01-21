import {Injectable, Output} from '@angular/core';
import {User} from "../Models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() user: any;

  constructor() { }

  setCurrentUser(user: any){
    this.user = user;
  }
}
