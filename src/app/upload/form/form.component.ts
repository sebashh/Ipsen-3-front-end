import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatExpansionPanel } from '@angular/material';
import {Paper} from "../../shared/Models/paper.model";
import {RestApiService} from "../../shared/Services/api-service";


let uniqueId = 0;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id ;

  @Input() paperObject: any;

  paper: Paper;

  title: string;
  author: string;
  paperFile: File;
  paperFileName: string;
  labelText: string;
  paperTitle: string;
  paperFileString: any;

  @ViewChild('panel1',{static: false}) firstPanel: MatExpansionPanel;

  @ViewChild('paperFileSelectElement',{static: false}) paperFileSelectElement;


  public forcedState = false;

  constructor(public restApi: RestApiService) {
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
      this.uploadPaper();
    }
  }

  getFiles(event) {
    this.id =  `event{uniqueId++}`;
    this.paperFileSelectElement.nativeElement.style.color = "rgb(79, 216, 181)";
    this.labelText = event.target.files[0].name;
    this.paperFile = event.target.files[0];
    this.paperFileName = event.target.files[0].name;
    this.convertFile(event.target);
  }

   toggleFirstPanel() : void{
      this.firstPanel.toggle();
    }

  convertFile(e) : void{
    var myReader = new FileReader();
     myReader.onloadend = (e) => {
     this.paperFileString = myReader.result;
    }
    myReader.readAsDataURL(this.paperFile);
  }

   uploadPaper() :void {
     this.paper = new Paper(1, this.title, this.author, 4,null, this.paperFileString);
     console.log(this.restApi.postResource("paper/upload", this.paper, 'application/json'));
   }






}
