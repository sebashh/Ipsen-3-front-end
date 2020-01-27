import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../Services/user.service";

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {

  constructor(private userService: UserService) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.userService.isAuthorized(next.data.expectedRoles);
  }

}
