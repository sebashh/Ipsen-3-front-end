import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { StudentComponent } from './user-page/student/student.component';
import { TeacherComponent } from './user-page/teacher/teacher.component';
import { GuestComponent } from './user-page/guest/guest.component';
import { AdminComponent } from './user-page/admin/admin.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { LoginComponent } from './user/login/login.component';

import { RegisterComponent } from './user/register/register.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectViewCardComponent} from "./projects/project-view-card/project-view-card.component";
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { PaperListComponent } from './papers/paper-list/paper-list.component';
import { PaperItemComponent } from './papers/paper-list/paper-item/paper-item.component';
import {LoginService} from './user/login/login-service';
import {RegisterService} from './user/register/register-service';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule, MatExpansionModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterStudentComponent } from './user/register/register-student/register-student.component';
import { RegisterClientComponent } from './user/register/register-client/register-client.component';
import { RegisterTeacherComponent } from './user/register/register-teacher/register-teacher.component';
import {ClientComponent} from "./user-page/client/client.component";
import {UserPageModule} from "./user-page/user-page.module";
import { MatIconModule, MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsModule} from "./projects/projects.module";


export const routes: Routes = [
  { path: 'home', component: PaperListComponent},
  { path: 'projects', component: ProjectListComponent},
  { path: 'about', component: PaperListComponent },
  { path: 'archive', component: ProjectListComponent },
  { path: 'register', component: PaperItemComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopbarComponent,
    StudentComponent,
    ClientComponent,
    TeacherComponent,
    GuestComponent,
    ProjectViewCardComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    ProjectListComponent,
    ProjectItemComponent,
    PaperListComponent,
    PaperItemComponent,
    RegisterStudentComponent,
    RegisterClientComponent,
    RegisterTeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    SelectDropDownModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    UserPageModule,
    ProjectsModule
  ],
  providers: [LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
