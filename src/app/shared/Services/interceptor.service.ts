import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private userService: UserService) { }

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.userService.user) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'authorization': JSON.stringify(this.userService.user)
        })
      });
      console.log(authReq);
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
