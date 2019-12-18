import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-uploadlist',
  templateUrl: './uploadlist.component.html',
  styleUrls: ['./uploadlist.component.css']
})
export class UploadlistComponent implements OnInit {

  forms = [new FormComponent];


  constructor() { }

  ngOnInit() {
  }

  addForm(){
    this.forms.push(new FormComponent);
  }

}
