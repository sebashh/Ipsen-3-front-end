import { Component } from '@angular/core';
import {Project} from "./shared/Models/project.model";
import {RestApiService} from "./shared/Services/api-service";
import {CategoryService} from "./shared/Services/category.service";
import {StudyService} from "./shared/Services/study.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IPSEN3-Front-End';

  constructor(
    public restApi: RestApiService,
    public categoryService: CategoryService,
    public studyService: StudyService
  ) {
    categoryService.init();
    studyService.init();
  }
}
