import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Project} from "../../../shared/project.model";

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  private static instance: RestApiService;
  // Define API
  apiURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  //EXAMPLE
  // getTest(): Observable<string> {
  //   return this.http.get(this.apiURL + 'ipsen3projects/test', {responseType: 'text'})
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }


  // Error handling 
  }


  getResource(path : String, type : any) :
    Observable<any>{
      return this.http.get(this.apiURL + path, {responseType: type})
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }

  //EXAMPLE
  getTest(): Observable<string> {
    return this.http.get(this.apiURL + 'ipsen3projects/test', {responseType: 'text'})
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  // Error handling
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}
  postResource(path : string, param : any, returnType : any) :
     any {
    this.http.post(this.apiURL + path, param, {responseType : returnType})
      .pipe(
        retry(1),
        catchError(this.handleError)
      ).subscribe((data) => {
        return data;
      })

  }
}
