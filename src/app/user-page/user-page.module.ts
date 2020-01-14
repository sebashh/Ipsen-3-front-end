import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';
import { CreateProjectComponent } from './client/create-project/create-project.component';
import { HomePageComponent } from './client/home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [ CreateProjectComponent, HomePageComponent],
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
