import {Component, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../shared/project.model';

@Component({
  selector: 'app-project-item-view',
  templateUrl: './project-item-view.component.html',
  styleUrls: ['./project-item-view.component.css']
})
export class ProjectItemViewComponent implements OnInit {
  @Output()
  project: Project;
  title: string;
  item = [
    {description : String},
    {study : String},
    {category : String}
  ];
  pageOfItems: Array<any>;

  constructor() { }

  ngOnInit() {

    this.title = this.project.getData().title;
    // this.item = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
