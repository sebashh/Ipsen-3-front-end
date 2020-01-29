import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/shared/Models/project.model';
import {RestApiService} from "../../../shared/Services/api-service";
import {UserService} from "../../../shared/Services/user.service";

@Component({
  selector: 'app-client-my-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectList implements OnInit {

  inputField: string;
  allMyProjects : Project[] = [];
  filteredProjects : Project[] = [];
  private pageOfItems: Array<any>;
  constructor(public restApi: RestApiService, private userService: UserService) { }
  ngOnInit() {
    this.getAllProjects(this.userService.user.id);
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
