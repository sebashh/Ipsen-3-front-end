import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

class JSEncrypt {
}

@Injectable({
  providedIn: 'root'
})
export class EncryptService{
  JSEncrypt: any;

  constructor() { }

  encryptText(text: string): string{

    return null;
  }

}
