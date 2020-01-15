import { Component } from '@angular/core';
import { RestApiService } from './src/server/server/server';
import {Project} from "./shared/project.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IPSEN3-Front-End';

  constructor(
    public restApi: RestApiService
  ) { }

  // EXAMPLE
  // HelloWorld() {
  //   this.restApi.getTest().subscribe((data)=>{
  //     console.log(data);
  //   })
  //
  testProject: Project = new Project(1, "new project", "DESCRIPTION OF THE PROJECT THAT IS ALOT OF TEXT", "study", "category", new Date(), 1);

}
