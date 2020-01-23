import {Injectable, Output} from '@angular/core';
import {User} from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() user: User;

  constructor() { }

  setCurrentUser(user: User) {
    this.user = user;
  }
}
