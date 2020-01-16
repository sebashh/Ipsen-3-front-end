import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { StudentComponent } from './user-page/student/student.component';
import { TeacherComponent } from './user-page/teacher/teacher.component';
import { GuestComponent } from './user-page/guest/guest.component';
import { AdminComponent } from './user-page/admin/admin.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProjectListFilterComponent } from './projects/project-list/project-list-filter.component';
import { ProjectViewCardComponent} from './projects/project-view-card/project-view-card.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { PaperListComponent } from './papers/paper-list/paper-list.component';
import { PaperItemComponent } from './papers/paper-list/paper-item/paper-item.component';
import {LoginService} from './user/login/login.service';
import {RegisterService} from './user/register/register.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatExpansionModule, MatIconModule, MatSelectModule, MatGridListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { RegisterStudentComponent } from './user/register/register-student/register-student.component';
import { RegisterClientComponent } from './user/register/register-client/register-client.component';
import { RegisterTeacherComponent } from './user/register/register-teacher/register-teacher.component';
import { UploadComponent } from './upload/upload.component';
import { FormComponent } from './upload/form/form.component';
import { UploadlistComponent } from './upload/uploadlist/uploadlist.component';
import { SidebarModule } from 'ng-sidebar';
import {ClientComponent} from './user-page/client/client.component';
import {UserPageModule} from './user-page/user-page.module';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsModule} from './projects/projects.module';
import { ClientMyProjectsComponent } from './user-page/client/client-my-projects/client-my-projects.component';
import { HttpClientModule } from '@angular/common/http';
import {ProjectScrollbarComponent} from './user-page/project-scrollbar/project-scrollbar.component';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import {ProjectViewComponent} from './projects/project-view/project-view.component';
import {ProjectItemViewComponent} from './projects/project-list/project-item-view.component';
import {JwPaginationComponent} from 'jw-angular-pagination';
import {ProjectService} from './shared/project.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: GuestComponent},
  { path: 'projects', component: ClientMyProjectsComponent},
  { path: 'about', component: PaperListComponent },
  { path: 'archive', component: ProjectListFilterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/clientRegister', component: RegisterClientComponent},
  { path: 'register/studentRegister', component: RegisterStudentComponent},
  { path: 'register/teacherRegister', component: RegisterTeacherComponent},
  { path: 'projectPage', component: ProjectViewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopbarComponent,
    StudentComponent,
    TeacherComponent,
    GuestComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    ProjectListFilterComponent,
    ProjectItemComponent,
    PaperListComponent,
    PaperItemComponent,
    RegisterStudentComponent,
    RegisterClientComponent,
    RegisterTeacherComponent,
    UploadComponent,
    FormComponent,
    UploadlistComponent,
    RegisterTeacherComponent,
    ProjectScrollbarComponent,
    ClientComponent,
    ClientMyProjectsComponent,
    ProjectViewCardComponent,
    ProjectViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    SelectDropDownModule,
    MatSelectModule,
    SharedModule,
    SidebarModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    UserPageModule,
    ProjectsModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],


  providers: [LoginService, RegisterService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
