import { Component, OnInit, /*Output, EventEmitter, Input*/ } from '@angular/core';
// import {ProjectModel} from '../../shared/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  opened = false;
  textOnIcon = 'Filter';
  // public ItemName: ProjectModel;
  // public searchValue: string;
  // @Input() resultSearch: ProjectModel[];
  // @Output() resultNogWat = new EventEmitter<ProjectModel>();

  searchValue = '';
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
