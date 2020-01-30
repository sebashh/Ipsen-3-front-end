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
  constructor(public dialog: MatDialog, public apiService: RestApiService) { }

  ngOnInit() {
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
        // this.apiService.getUserById(result);
        this.apiService.registerStudy(result)
        
        break;
      case 'Category':
        console.log(result);
        break;
      case 'Project':
        this.dialogRef = this.dialog.open(CreateProjectComponent, {
          width: '90%',
          data: {
          id: result 
          }
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
        this.dialogRef = this.dialog.open(FormComponent, {
          width: '25%'
        });
        break;
      case 'admin':
        this.dialogRef = this.dialog.open(RegisterAdminComponent, {
          width: '35%'
        })
        break;
    }
  }
}
