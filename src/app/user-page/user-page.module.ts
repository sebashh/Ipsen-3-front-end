import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './client/create-project/create-project.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomePageComponent } from './client/home-page/home-page.component';
import {SelectDropDownModule} from "ngx-select-dropdown";

@NgModule({
    declarations: [ CreateProjectComponent, HomePageComponent],
    exports: [
        CreateProjectComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    FormsModule
  ]
})
export class UserPageModule { }
