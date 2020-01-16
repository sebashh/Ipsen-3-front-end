import {Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList} from '@angular/core';
import {FormComponent} from '../form/form.component';
import {RestApiService} from "../../shared/Services/api-service";

@Component({
  selector: 'app-uploadlist',
  templateUrl: './uploadlist.component.html',
  styleUrls: ['./uploadlist.component.css']
})
export class UploadlistComponent implements OnInit {

  forms = [new FormComponent(this.restApi)];

  @ViewChild('paperScrollContainer',{static: false}) container: ElementRef;


  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.scrollToBottom()
  }

  addForm(){
    this.forms.push(new FormComponent(this.restApi));
    setTimeout(() => {
      this.scrollToBottom()
    });
  }


  scrollToBottom() {
    try {
      this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    } catch(err) { }
  }

}
