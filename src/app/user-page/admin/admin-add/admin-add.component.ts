import { Component, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { RegisterStudentComponent } from 'src/app/user/register/register-student/register-student.component';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

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

  openComponentDialog(): void {
    console.log("Hello");
    const dialogRef = this.dialog.open(RegisterStudentComponent);

  }
}
