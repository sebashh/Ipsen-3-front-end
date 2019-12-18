import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ClientMyProjectsComponent } from './client/client-my-projects/client-my-projects.component';
import { MatGridListModule } from '@angular/material';
import { CreateProjectComponent } from './client/create-project/create-project.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomePageComponent } from './client/home-page/home-page.component';
import {SelectDropDownModule} from "ngx-select-dropdown";

@NgModule({
    declarations: [ CreateProjectComponent, HomePageComponent, ClientComponent, ClientMyProjectsComponent],
    exports: [
        CreateProjectComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    FormsModule
    MatGridListModule
  ]
})
export class UserPageModule { }
