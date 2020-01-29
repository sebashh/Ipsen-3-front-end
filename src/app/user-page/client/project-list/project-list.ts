import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/shared/Models/project.model';
import {RestApiService} from "../../../shared/Services/api-service";
import {UserService} from "../../../shared/Services/user.service";
import {StudyService} from '../../../shared/Services/study.service';
import {CategoryService} from '../../../shared/Services/category.service';
@Component({
  selector: 'app-client-my-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectList implements OnInit {
  inputField: string;
  allMyProjects : Project[] = [];
  filteredProjects : Project[] = [];
  optionsStudy = [];
  configStudy: any;
  optionsCategory = [];
  configCategory: any;
  dataModelCat: any;
  dataModelStudy: any;
  private pageOfItems: Array<any>;
  constructor(public restApi: RestApiService, private userService: UserService, private studyService: StudyService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllProjects(this.userService.user.id);
    this.optionsStudy = this.studyService.studies;
    this.optionsCategory = this.categoryService.categories;
    this.configCategory = this.getConfig(this.optionsCategory);
    this.configStudy = this.getConfig(this.optionsStudy);
  }
  public searchValue: string

  getConfig(array: any[]){
    return {
      displayKey:"name",
      search: true,
      limitTo: array.length,
      moreText: 'more',
      noResultsFound: 'No results found!',
      searchPlaceholder: 'Search',
      searchOnKey: 'name'
    }
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

  getAllProjects(client_id: number){
    this.restApi.getAllProjects().subscribe((data)=> {
      this.allMyProjects = data;
      this.filterContent();
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  filterContent() {
    let tempList = [];

    if (!String.prototype.includes) {
      String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
          start = 0;
        }

        if (start + search.length > this.length) {
          return false;
        } else {
          return this.indexOf(search, start) !== -1;
        }
      }
    };
      if(this.inputField != '' && this.inputField != null) {
        let value = this.inputField.toLowerCase();
        let values = value.split(" ");
        values = values.filter(Boolean);
        if(values.length != 0) {
          this.allMyProjects.forEach((project) => {
            let title = project.title.toLowerCase();
            let titleValues = title.split(" ");
            let found;
            let notFound = values.some(value => {
              found = titleValues.some(title => {
                if (value == null || value == '') return true;
                if (title.includes(value) && title[0] == value[0]) {
                  let index = titleValues.indexOf(title);
                  if (index > -1) titleValues.splice(index, 1);
                  return true;
                }
              });
              if(!found) return true;
            });
            if (!notFound) tempList.push(project);
          });
          this.filteredProjects = tempList;
        }
      }
      else this.filteredProjects = this.allMyProjects;
    }

}
