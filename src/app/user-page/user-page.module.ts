import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';
import { CreateProjectComponent } from './client/create-project/create-project.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './client/home-page/home-page.component';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import { AdminStatisticsComponent } from './admin/admin-statistics/admin-statistics.component';
import { AdminListAccountsComponent } from './admin/admin-list-accounts/admin-list-accounts.component';
import { AdminListPapersComponent } from './admin/admin-list-papers/admin-list-papers.component';
import { AdminListProjectsComponent } from './admin/admin-list-projects/admin-list-projects.component';

@NgModule({
    declarations: [ CreateProjectComponent, HomePageComponent, AdminStatisticsComponent, AdminListAccountsComponent, AdminListPapersComponent, AdminListProjectsComponent],
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
