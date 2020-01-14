import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatExpansionPanel } from '@angular/material';


let uniqueId = 0;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id ;

  @Input() paperObject: any;

  title: string;
  author: string;
  paperFile: File;
  paperFileName: string;
  labelText : string;
  paperTitle: string;

  @ViewChild('panel1',{static: false}) firstPanel: MatExpansionPanel;

  @ViewChild('paperFileSelectElement',{static: false}) paperFileSelectElement;



  public forcedState = false;

  constructor() {
    this.labelText = "No file";
    this.paperTitle = "Paper details";
  }

  ngOnInit() {
  }

  onSubmitClick(form){
    if (this.paperFile == null || form.controls['author'].value == '' || form.controls['title'].value == ''){
     this.paperFileSelectElement.nativeElement.style.color = "rgb(201, 81, 75)";
    }
    else {
      document.getElementById('paperSubmitButton').style.color = "black";
      this.title = form.controls['title'].value;
      this.author = form.controls['author'].value;
      this.paperTitle = form.controls['title'].value;
      this.toggleFirstPanel();
    }
  }

  getFiles(event) {
    this.id =  `event{uniqueId++}`;
    this.paperFileSelectElement.nativeElement.style.color = "rgb(79, 216, 181)";
    this.labelText = event.target.files[0].name;
    this.paperFile = event.target.files[0];
    this.paperFileName = event.target.files[0].name;
  }

   toggleFirstPanel(){
      this.firstPanel.toggle();
    }

}
