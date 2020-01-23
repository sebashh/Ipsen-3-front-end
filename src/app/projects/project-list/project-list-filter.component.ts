import {Component, Input, OnInit, /*Output, EventEmitter, Input*/} from '@angular/core';
import {Paper} from '../../shared/Models/paper.model';

@Component({
  selector: 'app-project-list-filter',
  templateUrl: './project-list-filter.component.html',
  styleUrls: ['./project-list-filter.component.css']
})
export class ProjectListFilterComponent implements OnInit {
  opened = false;
  public searchValue: string;


  constructor() { }

  ngOnInit() {
  }


  toggleSidebar() {
    this.opened = !this.opened;
  }

  updateFilter() {

  }
}
