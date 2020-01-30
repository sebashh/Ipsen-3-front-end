import { Component, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { RegisterStudentComponent } from 'src/app/user/register/register-student/register-student.component';
import { RegisterTeacherComponent } from 'src/app/user/register/register-teacher/register-teacher.component';
import { RegisterClientComponent } from 'src/app/user/register/register-client/register-client.component';
import { ClientComponent } from '../../client/client.component';
import { PaperItemComponent } from 'src/app/papers/paper-list/paper-item/paper-item.component';
import { FormComponent } from 'src/app/upload/form/form.component';
import { RegisterAdminComponent } from 'src/app/user/register/register-admin/register-admin.component';
import { CreateProjectComponent } from '../../client/create-project/create-project.component';
import { RestApiService } from 'src/app/shared/Services/api-service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  dialogRef;
  result: any;
  Clients = [];
  Teachers = [];
  constructor(public dialog: MatDialog, public apiService: RestApiService) { }

  ngOnInit() {
    this.getAllClients()
    this.getAllTeachers()
  }
  
  getAllTeachers(){
    this.apiService.getAllTeachers().subscribe((data)=>{
      console.log(data)
      this.Teachers = data;
    })
  }

  getAllClients(){
    this.apiService.getAllClients().subscribe((data)=>{
      this.Clients = data;
    })
  }

  openDialog(message: String, placeholder: String, element?: boolean, options?: any) {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.placeholder = placeholder;
    dialogRef.componentInstance.element = element
    dialogRef.componentInstance.options = options
    dialogRef.componentInstance.onOk.subscribe(result => {
      this.result = result;
      this.pickFunction(placeholder, this.result);
    })
  }

  pickFunction(item: String, result: any){
    switch(item){
      case 'Study':
        this.apiService.registerStudy(result)
        break;
      case 'Category':
        this.apiService.registerCategory(result)
        break;
      case 'Project':
        this.dialogRef = this.dialog.open(CreateProjectComponent, {
          width: '90%',
          data: {
          id: result 
          }
        });
          break;
        case 'Paper':
          this.dialogRef = this.dialog.open(FormComponent, {
            width: '25%'
          });
          break;
    }
  }

  openComponentDialog(addThis: String): void {
    switch (addThis) {
      case 'study':
        this.openDialog("Add a new Study", "Study");
        break;
      case 'category':
        this.openDialog("Add a new Category", "Category");
        break;
      case 'student':
        this.dialogRef = this.dialog.open(RegisterStudentComponent, {
          width: '90%'
        });
        break;
      case 'teacher':
        this.dialogRef = this.dialog.open(RegisterTeacherComponent, {
          width: '90%'
        });
        break;
      case 'client':
        this.dialogRef = this.dialog.open(RegisterClientComponent, {
          width: '90%'
        });
        break;
      case 'project':
        this.openDialog("For which client do you want to create a project?", "Project", true, this.Clients)
        break;
      case 'paper':
        this.openDialog("For which Teacher are you adding a paper for?", "Paper",true, this.Teachers)
        break;
      case 'admin':
        this.dialogRef = this.dialog.open(RegisterAdminComponent, {
          width: '35%'
        })
        break;
    }
  }
}
