import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/shared/Models/project.model';
import {RestApiService} from "../../../shared/Services/api-service";
import {UserService} from "../../../shared/Services/user.service";
import {StudyService} from '../../../shared/Services/study.service';
import {CategoryService} from '../../../shared/Services/category.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../shared/Models/category.model';
import {Study} from '../../../shared/Models/study.model';
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
  dataModelCat: Category;
  dataModelStudy: Study;
  checking: boolean;
  private pageOfItems: Array<any>;
  constructor(public restApi: RestApiService, private userService: UserService, private studyService: StudyService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllProjects();
    this.optionsStudy = this.studyService.studies;
    this.optionsCategory = this.categoryService.categories;
    console.log(this.studyService.studies);
    console.log(this.categoryService.categories);
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
      this.allMyProjects = data;
      this.filterContent();
      console.log(data);

    });
  }

  getProjectsByStudy(studyId: number){
    this.restApi.getProjectsByStudyId(studyId).subscribe((data) => {
      this.allMyProjects = data;
      this.filterContent();
        console.log(data);

      }
    )
  }

  getProjectsByBoth(studyId: number, categoryId: number){
    this.restApi.getProjectsbyBoth(studyId, categoryId).subscribe((data) => {
      this.allMyProjects = data;
      this.filterContent();
        console.log(data);

      }
    )
  }
  getAllProjects(){
    this.restApi.getAllProjects().subscribe((data)=> {
      this.allMyProjects = data;
      this.filterContent();
    });
  }

  onSelectUpdate(){
    let found = false;

    if(this.dataModelStudy && this.dataModelCat)
    if(this.dataModelCat.id && this.dataModelStudy.id) {
      this.getProjectsByBoth(this.dataModelStudy.id, this.dataModelCat.id)
      found = true;
    }
    if(this.dataModelCat && !found) {
      if (this.dataModelCat.id) {
        this.getProjectsByCategory(this.dataModelCat.id)
        found = true;
      }
    }
    if(this.dataModelStudy && !found) {
      if (this.dataModelStudy.id) {
        this.getProjectsByStudy(this.dataModelStudy.id)
        found = true;
      }
    }
    else if(!found){
      this.getAllProjects();
    }
  }

  onUpdateSearch(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
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
