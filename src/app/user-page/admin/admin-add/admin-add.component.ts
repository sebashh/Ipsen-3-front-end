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

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  dialogRef;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog(message: String, placeholder: String) {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.placeholder = placeholder;
    dialogRef.componentInstance.onOk.subscribe(result => {
      console.log(result);
    })
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
        this.dialogRef = this.dialog.open(CreateProjectComponent, {
          width: '90%'
        });
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
