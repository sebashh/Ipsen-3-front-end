import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterPipe} from '../projects/project-list/search_list_module';



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
