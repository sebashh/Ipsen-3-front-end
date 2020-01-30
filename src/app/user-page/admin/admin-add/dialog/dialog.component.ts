import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Client } from 'src/app/shared/Models/client.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  public message: String;
  public placeholder: String;
  onOk = new EventEmitter();
  public result: any;
  public element: Boolean = false;
  public options: any[];

  constructor(public dialogRef: MatDialogRef<DialogComponent>) { 
    console.log(this.options)
  }
}