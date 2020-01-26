import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/Services/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list-projects',
  templateUrl: './admin-list-projects.component.html',
  styleUrls: ['./admin-list-projects.component.css']
})
export class AdminListProjectsComponent implements OnInit {
  showComponent: boolean;

  constructor(public restApi: RestApiService,public router: Router) { }
  AllProjects = [];

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects(){
    this.restApi.getAllProjects().subscribe((data)=>{
      for(var i = 0; i < data.length; i++){
        this.AllProjects = data;
      }
    })
  }

  delete(id: number, title: String){
    var result = confirm("Are you sure you want to delete "+title+"?");
    console.log(result);

    console.log(id);
    if(result){
      this.restApi.deleteProject(id).subscribe();;
      this.getAllProjects();
      this.router.navigate(["/admin/projects"]);
    }
  }

}
