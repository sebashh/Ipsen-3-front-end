import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/Services/api-service';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/Models/student.model';
import { Teacher } from 'src/app/shared/Models/teacher.model';
import { Client } from 'src/app/shared/Models/client.model';
import { StudyService } from 'src/app/shared/Services/study.service';

@Component({
  selector: 'app-admin-list-accounts',
  templateUrl: './admin-list-accounts.component.html',
  styleUrls: ['./admin-list-accounts.component.css']
})

export class AdminListAccountsComponent {
  dialog: any;
  constructor(public restApi: RestApiService, public router: Router,
    public studyService: StudyService) { }

  AllStudents = [];
  AllTeachers = [];
  AllClients = [];
  Students = true;
  Teachers = false;
  Clients = false;
  edit = false;
  divIndex;
  AllStudies = [];

  
  ngOnInit() {
    this.studyService.event.subscribe(item =>{
      this.AllStudies = item;
    });
    this.getAllStudents();
    this.AllStudies = this.studyService.studies;
    
  }

  getStudyName(study: number){
    return this.AllStudies[study].name;

  }

  getAllStudents() {
    this.restApi.getAllStudents().subscribe((data) => {
        this.AllStudents = data;
    })
  }

  getAllTeachers() {
    this.restApi.getAllTeachers().subscribe((data) => {
        this.AllTeachers = data;
    })
  }

  getAllClients() {
    this.restApi.getAllClients().subscribe((data) => {
        this.AllClients = data;
    })
  }

  showStudents() {
    this.getAllStudents();
    this.Students = true;
    this.Teachers = false;
    this.Clients = false;
    this.resetButton();
    this.changeButton('Students');
  }

  showTeachers() {
    this.getAllTeachers();
    this.Students = false;
    this.Teachers = true;
    this.Clients = false;
    this.resetButton();
    this.changeButton('Teachers');
  }

  showClients() {
    this.getAllClients();
    this.Students = false;
    this.Teachers = false;
    this.Clients = true;
    this.resetButton();
    this.changeButton('Clients');
  }

  changeButton(id: string) {
    let x = document.getElementById(id);
    x.className += ' active';
  }
  resetButton() {
    let x = document.getElementById('Students');
    let y = document.getElementById('Teachers');
    let z = document.getElementById('Clients');
    x.className = 'button';
    y.className = 'button';
    z.className = 'button';
  }

  editRow(id: number) {
    this.refreshPage();
    this.edit = true;
    this.divIndex = id;

  }

  save(user: any) {
    this.refreshPage();

  }

  cancel() {
    this.edit = false;
    this.refreshPage();
  }

  delete(id: number, email: String) {
    var result = confirm("Are you sure you want to delete " + email + "?");
    if (result) {
      this.deleteUser(id);
      this.refreshPage();
    }
  }

  updateStudent(student: Student) {
    this.restApi.updateStudent(student).subscribe();
    this.cancel();
  }

  updateTeacher(teacher: Teacher) {
    this.restApi.updateTeacher(teacher).subscribe();
    this.cancel();
  }

  updateClient(client: Client) {
    this.restApi.updateClient(client).subscribe();

    this.cancel();
  }


  deleteUser(id: number) {
    this.restApi.deleteUser(id).subscribe();
  }

  refreshPage() {
    this.getAllClients();
    this.getAllStudents();
    this.getAllTeachers();
    this.studyService.refresh();
    this.AllStudies = this.studyService.studies;  
    this.router.navigate(["/admin/accounts"]);
  }
  openDialogEdit(id: number) {
    alert(id);
    return this.dialog.open(AdminListAccountsComponent, {
      data: {
        id: id
      }
    });
  }

}
