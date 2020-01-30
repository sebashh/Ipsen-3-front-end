import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/Services/api-service';
import { Router } from '@angular/router';
import { Project } from 'src/app/shared/Models/project.model';
import { StudyService } from 'src/app/shared/Services/study.service';
import { CategoryService } from 'src/app/shared/Services/category.service';

@Component({
  selector: 'app-admin-list-projects',
  templateUrl: './admin-list-projects.component.html',
  styleUrls: ['./admin-list-projects.component.css']
})
export class AdminListProjectsComponent implements OnInit {
  showComponent: boolean;

  constructor(public restApi: RestApiService,public router: Router,
    public studyService: StudyService, public categoryService: CategoryService) { }
  AllProjects = [];
  edit = false;
  divIndex;
  AllStudies = [];
  AllCategories = [];
  
  ngOnInit() {
    this.getAllProjects();
    this.AllStudies = this.studyService.studies;
    this.AllCategories = this.categoryService.categories;
    this.studyService.event.subscribe(item =>{
      this.AllStudies = item;
    });
    this.AllStudies = this.studyService.studies;
    this.categoryService.event.subscribe(item =>{
      this.AllCategories = item;
    });
  }

  getStudyName(study: number){
    for(var i = 0; i < this.AllStudies.length; i++){
      if(this.AllStudies[i].id==study){
        return this.AllStudies[i].name
      }
    }
  }

  getCategoryName(category: number){
    for(var i = 0; i < this.AllCategories.length; i++){
      if(this.AllStudies[i].id==category){
        return this.AllCategories[i].name
      }
    }
  }

  getAllProjects(){
    this.restApi.getAllProjects().subscribe((data)=>{
      this.AllProjects = data;
    })

  }

  delete(id: number, title: String){
    var result = confirm("Are you sure you want to delete "+title+"?");
    if(result){
      this.restApi.deleteProject(id).subscribe();;
      this.getAllProjects();

    }
  }

  editRow(id: number) {
    this.edit = true;
    this.divIndex = id;

  }

  updateProject(project: Project) {
    this.restApi.updateProject(project).subscribe();
    // this.refreshPage();
    this.cancel();
  }


  cancel() {
    this.edit = false;
    this.refreshPage();
  }

  refreshPage() {
    this.getAllProjects();
    this.router.navigate(["/admin/projects"]);
  }
}
