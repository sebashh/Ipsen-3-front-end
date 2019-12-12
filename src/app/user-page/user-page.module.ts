import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ClientMyProjectsComponent } from './client/client-my-projects/client-my-projects.component';
import { MatGridListModule } from '@angular/material';



@NgModule({
  declarations: [ClientComponent, ClientMyProjectsComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})
export class UserPageModule { }
