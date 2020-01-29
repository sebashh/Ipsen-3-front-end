import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatDialogModule } from '@angular/material';
import { CreateProjectComponent } from './client/create-project/create-project.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import { AdminStatisticsComponent } from './admin/admin-statistics/admin-statistics.component';
import { AdminListAccountsComponent } from './admin/admin-list-accounts/admin-list-accounts.component';
import { AdminListPapersComponent } from './admin/admin-list-papers/admin-list-papers.component';
import { AdminListProjectsComponent } from './admin/admin-list-projects/admin-list-projects.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { DialogComponent } from './admin/admin-add/dialog/dialog.component';

@NgModule({
    declarations: [ CreateProjectComponent, 
      AdminStatisticsComponent, 
      AdminListAccountsComponent, 
      AdminListPapersComponent, 
      AdminListProjectsComponent, 
      AdminAddComponent,
    DialogComponent],
    exports: [
        CreateProjectComponent,
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    FormsModule,
    MatGridListModule,
    MatDialogModule
  ],
  entryComponents: [DialogComponent]
})
export class UserPageModule { }
