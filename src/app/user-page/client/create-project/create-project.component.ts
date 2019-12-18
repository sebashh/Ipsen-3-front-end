import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import {Project} from "../../../shared/project.model";

@Component({

  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})


export class CreateProjectComponent implements OnInit {
  checking: boolean;
  project: Project;
  title_input: String;
  description_input: String;

  optionsStudy = ["Study1", "Study2"];
  configStudy = {
    search: true,
    limitTo: this.optionsStudy.length,
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
  }

  optionsCategory = ["Category1", "Category2"];
  configCategory = {
    search: true,
    limitTo: this.optionsCategory.length,
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
  }

  projectForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    study: new FormControl(''),
    category: new FormControl('')
  });
  dataModelCat: any;
  dataModelStudy: any;

  constructor() {
    this.checking = false;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.project = new Project(null, this.title_input, this.description_input, this.dataModelStudy, this.dataModelCat, null)
    console.warn(this.project)
  }

}

