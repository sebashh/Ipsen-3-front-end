import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterPipe} from '../projects/project-list/search-list-module';



@NgModule({
  declarations: [FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [FilterPipe]
})
export class SharedModule { }
