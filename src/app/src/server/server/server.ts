import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Project} from '../../../shared/project.model';
import {Paper} from '../../../shared/paper.model';

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
  };


  getResource(path: string):
    any {
    this.http.get(this.apiURL + path)
      .pipe(
        retry(1),
        catchError(this.handleError)
      ).subscribe(item => {
      return item;
    });
    }

  getPapers(): Observable<Paper[]> {
    return this.http.get<Paper[]>(this.apiURL + 'paper/papers').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

  postResource(path: string, param: any, returnType: any):
     any {
    this.http.post(this.apiURL + path, param, {responseType : returnType})
      .pipe(
        retry(1),
        catchError(this.handleError)
      ).subscribe((data) => {
        return data;
      });

  }
}
