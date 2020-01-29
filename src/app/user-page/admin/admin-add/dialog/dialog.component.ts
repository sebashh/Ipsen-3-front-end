import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  public message: String;
  public placeholder: String;
  onOk = new EventEmitter();
  public result: String;

  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }
}