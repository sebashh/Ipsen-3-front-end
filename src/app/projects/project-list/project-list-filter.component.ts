import {Component, Input, OnInit, /*Output, EventEmitter, Input*/} from '@angular/core';
import {Paper} from '../../shared/paper.model';

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

  onUpdateSearch(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
