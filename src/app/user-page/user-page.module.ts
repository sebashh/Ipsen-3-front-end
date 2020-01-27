import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';
import { CreateProjectComponent } from './client/create-project/create-project.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectDropDownModule} from 'ngx-select-dropdown';

@NgModule({
    declarations: [ CreateProjectComponent],
    exports: [
        CreateProjectComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    FormsModule,
    MatGridListModule
  ]
})
export class UserPageModule { }
