import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {RestApiService} from "../../shared/Services/api-service";
import {Paper} from "../../shared/Models/paper.model";
import {Project} from "../../shared/Models/project.model";
import {ProjectService} from "../../shared/Services/project.service";

@Component({
  selector: 'app-new-upload',
  templateUrl: './new-upload.component.html',
  styleUrls: ['./new-upload.component.css']
})
export class NewUploadComponent implements OnInit {


  @Input()
  project : Project;

  currentFile:File;
  currentFileName:string;
  title: string;
  author: string;
  fileSelected: boolean;
  paperFileString : any;
  dragAndDropText = "Drag files here or click";

  paper : Paper;

  @ViewChild('inputTitle',{static:false})
  titleElem : ElementRef;

  @ViewChild('inputAuthor',{static:false})
  authorElem : ElementRef;

  constructor(private projectService: ProjectService, private apiService: RestApiService) { }

  ngOnInit() {
    this.project = this.projectService.getCurrentProject();
    this.fileSelected = false;
    this.currentFileName = "none";
    this.author = null;
    this.title = null;
    this.paperFileString = null;
  }

  submit(){
    console.log(this.currentFile)
    this.title = this.titleElem.nativeElement.value;
    this.author = this.authorElem.nativeElement.value;
    this.sendFile();
    this.titleElem.nativeElement.value = null;
    this.authorElem.nativeElement.value = null;
    this.currentFile = null;
    this.fileSelected = false;
    this.currentFileName = "None";
    this.dragAndDropText = "Drag files here or click";
  }

  fileSelect(fileInput:any){
    if (!this.fileSelected){
      this.currentFile = fileInput.target.files[0];
      this.currentFileName = this.currentFile.name;
      this.fileSelected = true;
      this.dragAndDropText = "File selected";
      this.convertFile();
    }
    else {
    }
  }

  onFileDropped($event){
    if (!this.fileSelected){
      this.currentFile = $event[0];
      this.currentFileName = this.currentFile.name;
      this.fileSelected = true;
      this.dragAndDropText = "File selected";
      this.convertFile();
    }
    else {
    }
  }

  convertFile() : void{
    var myReader = new FileReader();
    myReader.readAsDataURL(this.currentFile);
    myReader.onloadend = (e) =>{
      this.paperFileString = myReader.result;
    };
    myReader.onerror = function (error) {
    };
  }

  sendFile() {
    if (this.title != null && this.author != null && this.paperFileString != null ) {
      this.paper = new Paper(this.project.projectId, this.title, this.author, null, null, this.paperFileString);
      this.apiService.postResource("paper/upload", this.paper, 'application/json');
    }
    else {
    }
  }


}
