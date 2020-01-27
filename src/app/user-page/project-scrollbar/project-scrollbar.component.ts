import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../shared/Models/project.model';
import {RestApiService} from "../../shared/Services/api-service";

@Component({
  selector: 'app-scrollbar',
  templateUrl: './project-scrollbar.component.html',
  styleUrls: ['./project-scrollbar.component.css']
})
export class ProjectScrollbarComponent implements OnInit {

  @Input()
  projects: Array<Project> = [];


  constructor(public restApi: RestApiService) {
  }

  ngOnInit() {

  }

}
