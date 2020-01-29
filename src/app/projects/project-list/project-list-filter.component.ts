import {Component, Input, OnInit, /*Output, EventEmitter, Input*/} from '@angular/core';
import {Paper} from '../../shared/Models/paper.model';
import {Project} from '../../shared/Models/project.model';
import {RestApiService} from '../../shared/Services/api-service';

@Component({
  selector: 'app-project-list-filter',
  templateUrl: './project-list-filter.component.html',
  styleUrls: ['./project-list-filter.component.css']
})
export class ProjectListFilterComponent implements OnInit {
  opened = false;
  public searchValue: string;

  constructor(public restApi: RestApiService) { }


  ngOnInit() {
    this.getProjectsByCategory(2)
    this.getProjectsByStudy(1)
    this.getProjectsByBoth(1,2 )
  }

  getProjectsNewerThan(newerThan: Date){
    this.restApi.getProjectsNewerThan(newerThan).subscribe((data) =>{
      console.log('Projects: ', data);
    });
}

  getProjectsByCategory(categoryId: number){
    this.restApi.getProjectsByCategoryId(categoryId).subscribe((data) => {
      console.log('ProjectsByCat: ', data);
    });
  }

  getProjectsByStudy(studyId: number){
    this.restApi.getProjectsByStudyId(studyId).subscribe((data) => {
      console.log('ProjectsByStud: ', data)
      }
    )
  }

  getProjectsByBoth(studyId: number, categoryId: number){
    this.restApi.getProjectsbyBoth(studyId, categoryId).subscribe((data) => {
      console.log('Projects with both paras', data)

    }
    )
  }

  onUpdateSearch(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
