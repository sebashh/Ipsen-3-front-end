import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Project} from '../../../shared/project.model';
import {Statistics} from '../../../shared/statistics.model';
import {ResponseContentType} from '@angular/http';
import {Paper} from '../../../shared/paper.model';
import {Category} from '../../../shared/category.model';
import {Study} from '../../../shared/study.model';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  constructor(private http: HttpClient) { }
  private static instance: RestApiService;
  // Define API
  apiURL = 'http://localhost:8080/';

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
    get<T>(arg0: string): Observable<Project> {
        throw new Error('Method not implemented.');
    }


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

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURL + 'ipsen3categories/categories').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getStudies(): Observable<Study[]> {
    return this.http.get<Study[]>(this.apiURL + 'ipsen3studies/studies').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getPapers(): Observable<Paper[]> {
    return this.http.get<Paper[]>(this.apiURL + 'paper/papers').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
    getStatistics(): Observable<Statistics> {
      return this.http.get<Statistics>(this.apiURL + 'statistics/getall')
        .pipe(
          retry(1),
          catchError(this.handleError)
        );
    }

  getTopPopularProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiURL + 'statistics/topprojects')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  getProject(project_id: number): Observable<Project> {

    return this.http.get<Project>(this.apiURL + 'ipsen3projects/project=' + project_id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getAllMyProjects(client_id: number): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiURL + 'ipsen3projects/projects=' + client_id)
    .pipe(
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

  getPapersOfProject(projectId: number): Observable<any> {
    return this.http.get(this.apiURL + 'paper/project=' + projectId).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  downloadPDF(url): Observable<any> {
    return this.http.get(this.apiURL + 'paper/pdf=' + url, {responseType: 'blob'}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
}
