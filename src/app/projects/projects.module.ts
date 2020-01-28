import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemViewComponent } from './project-list/project-item-view.component';
import {JwPaginationComponent} from 'jw-angular-pagination';
import {SharedModule} from '../shared/shared.module';
import { ClientProjectViewComponent } from './project-view/Client-component/client-project-view/client-project-view.component';



@NgModule({
    declarations: [ProjectItemViewComponent, JwPaginationComponent],
  exports: [
    ProjectItemViewComponent,
    JwPaginationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectsModule { }
