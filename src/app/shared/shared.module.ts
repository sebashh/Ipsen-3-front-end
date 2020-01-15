import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterPipe} from '../projects/project-list/search-list-module';
import {ProjectListFilterComponent} from '../projects/project-list/project-list-filter.component';



@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    FilterPipe
  ],

  exports: [
    FilterPipe
  ]
})
export class SharedModule { }
