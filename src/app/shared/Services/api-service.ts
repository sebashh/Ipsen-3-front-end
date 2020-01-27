import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Project} from "../Models/project.model";
import {Paper} from "../Models/paper.model";
import {Statistics} from "../Models/statistics.model";
import {LoginModel} from "../Models/login.model";
import {UserService} from "./user.service";
import {setOffsetToUTC} from "ngx-bootstrap/chronos/units/offset";
import {dateStatistic} from "../Models/dateStatistic.model";

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  get<T>(arg0: string): Observable<Project> {
    throw new Error("Method not implemented.");
  }
  private static instance: RestApiService;
  // Define API
  apiURL = 'http://localhost:8080/';

  constructor(private http: HttpClient, private userService: UserService ) { }

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
  getStatistics(): Observable<Statistics>{
    return this.http.get<Statistics>(this.apiURL + 'statistics/getall')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getTopPopularProjects() : Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL + 'statistics/topprojects')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  getProject(project_id: number): Observable<Project> {

    return this.http.get<Project>(this.apiURL + 'ipsen3projects/project='+ project_id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  getAllMyProjects(client_id: number): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiURL + 'ipsen3projects/projects='+ client_id)
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

  handleRegisterError(error) {
    let errorMessage = '';
    if(error.status == '406'){
      errorMessage = 'Email already exists\nPlease enter a new email';
    }
    else if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;

    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  registerUser(path: string, param: any):
    any {
    console.log(param);
    this.http.post(this.apiURL + path, param)
      .pipe(
        retry(1),
        catchError(this.handleRegisterError)
      ).subscribe((data) => {
      return data;
    });
  }

  postResource(path: string, param: any, returnType: any):
    any {
    console.log(param);
    this.http.post(this.apiURL + path, param)
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

  getPapersAmountOfProject(projectId: number): Observable<any> {
    return this.http.get(this.apiURL + 'paper/project=' + projectId + '/amount').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  downloadPDF(url): Observable<any>{
    return this.http.get(this.apiURL + 'paper/pdf=' + url, {responseType: "blob"}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  loginUser(loginModel: LoginModel) {
    return this.http.post(this.apiURL + 'authentication/login',  loginModel).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getFollowAmountOfProject(projectId: number): Observable<any>{
    return this.http.get(this.apiURL + 'ipsen3projects/project=' + projectId + '/follow/amount').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  userFollowingProject(projectId: number) : Observable<any>{
    return this.http.get(this.apiURL + 'ipsen3projects/project=' + projectId + '/isFollowing').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  followProject(projectId: number) {
    return this.http.get(this.apiURL + 'ipsen3projects/project=' + projectId + '/follow').pipe(
      retry(1),
      catchError(this.handleError)
    ).subscribe();
  }

  unFollowProject(projectId: number) {
    return this.http.get(this.apiURL + 'ipsen3projects/project=' + projectId + '/unfollow').pipe(
      retry(1),
      catchError(this.handleError)
    ).subscribe();
  }

  getCategories() {
    return this.http.get(this.apiURL + 'ipsen3categories/categories').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getStudies() {
    return this.http.get(this.apiURL + 'ipsen3studies/studies').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getRecentStatisticsStudent() : Observable<any>{
    return this.http.get(this.apiURL + 'statistics/student').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getRandomFollowedProjects() : Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL + 'ipsen3projects/followed/user')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getRecentlyCreatedProjectsWithInterest() : Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL + 'ipsen3projects/interested/user')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getRecentStatisticsTeacher() : Observable<any>{
    return this.http.get(this.apiURL + 'statistics/teacher').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  getRecentStatisticsClient() : Observable<any> {
    return this.http.get(this.apiURL + 'statistics/client').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getRecentlyUpdatedProjects() : Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL + 'ipsen3projects/clientProjects/user')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getTopViewedProjectsClient() : Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL + 'ipsen3projects/clientProjects/top/user')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAdminSpecificStatistics(url : string) : Observable<dateStatistic[]>{
    return this.http.get<dateStatistic[]>(this.apiURL + 'statistics/admin/' + url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


}
