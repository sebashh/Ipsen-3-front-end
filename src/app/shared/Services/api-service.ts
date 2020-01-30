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
import { Student } from '../Models/student.model';
import { Teacher } from '../Models/teacher.model';
import { Client } from '../Models/client.model';
import {dateStatistic} from "../Models/dateStatistic.model";
import {ErrorMessages} from '../error-messages';
import { Admin } from '../Models/admin.model';
import { User } from '../Models/user.model';

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
  // tslint:disable-next-line:prefer-const

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

  deletePaper(id: number): Observable<{}> {

    return this.http.delete(this.apiURL + 'paper/delete=' + id )
      .pipe(
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

    return this.http.get<Project>(this.apiURL + 'projects/project='+ project_id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  getAllMyProjects(client_id: number): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiURL + 'projects/projects='+ client_id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiURL + 'projects/projects/all')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteProject(id: number): Observable<{}> {

    return this.http.delete(this.apiURL + 'projects/delete=' + id )
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiURL + 'users/student/getAllStudents')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateStudent(student: Student): Observable<Student>{
    return this.http.put<Student>(this.apiURL + 'users/student/studentUpdate', student)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateTeacher(teacher: Teacher): Observable<Teacher>{
    return this.http.put<Teacher>(this.apiURL + 'users/teacher/teacherUpdate', teacher)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateClient(client: Client): Observable<Client>{
    return this.http.put<Client>(this.apiURL + 'users/client/clientUpdate', client)
    .pipe(
      catchError(this.handleError)
    )
  }

  updatePaper(paper: Paper): Observable<Paper>{
    return this.http.put<Paper>(this.apiURL + 'paper/paperUpdate', paper)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateProject(project: Project): Observable<Project>{
    return this.http.put<Project>(this.apiURL + 'projects/projectUpdate', project)
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteUser(id: number): Observable<{}> {
    return this.http.delete(this.apiURL + 'users/delete=' + id)
      .pipe(
        catchError(this.handleError)
      );
  }


  getAllTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiURL + 'users/teacher/getAllTeachers')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getAllClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiURL + 'users/client/getAllClients')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
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

  handleInlogError() {
    let errorMessage = '';
    errorMessage = ErrorMessages.LoginNotValid;

    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  handleRegisterAdminError(error) {
    let errorMessage = '';
    if(error.status == '406'){
      errorMessage = 'Name already exists\nPlease enter a new name';
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
    return this.http.post(this.apiURL + path, param)
      .pipe(
        retry(1),
        catchError(this.handleRegisterError)
      );
  }

  registerAdmin(admin: Admin):
    any {
    return this.http.post(this.apiURL + "users/admin", admin)
      .pipe(
        retry(1),
        catchError(this.handleRegisterAdminError)
      ).subscribe((data) => {
        alert('Admin successfully created!');  
      return data;
    });
  }

  registerStudy(study: String){
    return this.http.post(this.apiURL+'studies/add', study)
    .pipe(
      retry(1),
      catchError(this.handleError)
    ).subscribe((data) =>{
      alert('Study successfully added!');
      return data
    })
  }

  registerCategory(category: String){
    return this.http.post(this.apiURL+'categories/add', category)
    .pipe(
      retry(1),
      catchError(this.handleError)
    ).subscribe((data) =>{
      alert('Category successfully added!');
      return data
    })
  }

  postResource(path: string, param: any, returnType: any):
    any {
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
      catchError(this.handleInlogError),
    );
  }

  getFollowAmountOfProject(projectId: number): Observable<any>{
    return this.http.get(this.apiURL + 'projects/project=' + projectId + '/follow/amount').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  userFollowingProject(projectId: number) : Observable<any>{
    return this.http.get(this.apiURL + 'projects/project=' + projectId + '/isFollowing').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  followProject(projectId: number) {
    return this.http.get(this.apiURL + 'projects/project=' + projectId + '/follow').pipe(
      retry(1),
      catchError(this.handleError)
    ).subscribe();
  }

  unFollowProject(projectId: number) {
    return this.http.get(this.apiURL + 'projects/project=' + projectId + '/unfollow').pipe(
      retry(1),
      catchError(this.handleError)
    ).subscribe();
  }

  getCategories() {
    return this.http.get(this.apiURL + 'categories/all').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getStudies() {
    return this.http.get(this.apiURL + 'studies/all').pipe(
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

  getRandomFollowedProjects(user_id : number) : Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL + 'projects/followed/user')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getRecentlyCreatedProjectsWithInterest(user_id : number) : Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL + 'projects/interested/user')
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

  getRecentlyUpdatedProjects(user_id : number) : Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL + 'projects/clientProjects/user')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getTopViewedProjectsClient(user_id : number) : Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL + 'projects/clientProjects/top/user')
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



  getAccessInformation(projectId: number): Observable<any> {
    return this.http.get(this.apiURL + 'projects/project=' + projectId + '/access/information', {responseType: 'text'}).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  requestProjectAccess(projectId: number) {
    this.http.get(this.apiURL + 'projects/project=' + projectId + '/access/request').pipe(
      retry(1),
      catchError(this.handleError)
    ).subscribe();
  }

  getAllAccessMembers(projectId: number): Observable<any> {
    return this.http.get(this.apiURL + 'projects/project=' + projectId + '/access/all').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getAllAccessRequests(projectId: number):Observable<any> {
    return this.http.get(this.apiURL + 'projects/project=' + projectId + '/access/requests/all').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  acceptAccessRequest(id: number, userId: number): Observable<any> {
    return this.http.get(this.apiURL + 'projects/project=' + id + '/access/teacher-id=' + userId + '/response=true').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  denyAccessRequest(id: number, userId: number): Observable<any> {
    return this.http.get(this.apiURL + 'projects/project=' + id + '/access/teacher-id=' + userId + '/response=false').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getUserEmailById():Observable <string>{
   return this.http.get(this.apiURL + 'users/email',{responseType: 'text'})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  increaseProjectViews(id : number) {
    return this.http.get(this.apiURL + 'projects/project=' + id + '/view').pipe(
      retry(1),
      catchError(this.handleInlogError)
    ).subscribe();
  }

  revokeAccess(projectId: number, id: number): Observable<any> {
    return this.http.get(this.apiURL + 'projects/project=' + projectId + '/access/teacher-id=' + id + '/response=false').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getClient(clientId: number): Observable<Client> {
    return this.http.get<Client>(this.apiURL + 'users/client/get=' + clientId).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }


}
