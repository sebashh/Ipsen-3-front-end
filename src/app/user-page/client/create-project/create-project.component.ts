import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import {Project} from "../../../shared/Models/project.model";
import {RestApiService} from "../../../shared/Services/api-service";
import {StudyService} from "../../../shared/Services/study.service";
import {CategoryService} from "../../../shared/Services/category.service";

@Component({

  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})


export class CreateProjectComponent implements OnInit {
  checking: boolean;
  project: Project;
  title_input: string;
  description_input: string;

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

  optionsStudy = [];
  configStudy: any;

  optionsCategory = [];
  configCategory: any;


  projectForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    study: new FormControl(''),
    category: new FormControl('')
  });
  dataModelCat: any;
  dataModelStudy: any;

  constructor( public restApi: RestApiService, private studyService: StudyService, private categoryService: CategoryService) {

    this.checking = false;
  }

  ngOnInit() {
    this.optionsStudy = this.studyService.studies;
    this.optionsCategory = this.categoryService.categories;
    this.configCategory = this.getConfig(this.optionsCategory);
    this.configStudy = this.getConfig(this.optionsStudy);
  }

  onSubmit() {
    this.project = new Project(null, this.title_input, this.description_input, this.dataModelStudy.id, this.dataModelCat.id, null, null);
    console.log(this.restApi.postResource("ipsen3projects/project/create", this.project, 'text'));
  }

}

