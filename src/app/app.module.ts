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
// import { ProjectListFilterComponent } from './projects/project-list/project-list-filter.component';
import { ProjectViewCardComponent} from './projects/project-view-card/project-view-card.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { PaperListComponent } from './papers/paper-list/paper-list.component';
import { PaperItemComponent } from './papers/paper-list/paper-item/paper-item.component';
import {LoginService} from './user/login/login.service';
import {RegisterService} from './user/register/register.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule, MatButtonModule, MatCheckboxModule, MatExpansionModule, MatIconModule, MatSelectModule, MatGridListModule, MatAutocompleteModule, MatInputModule} from '@angular/material';
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
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {ProjectsModule} from './projects/projects.module';
import { ProjectList } from './user-page/client/project-list/project-list';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProjectScrollbarComponent} from './user-page/project-scrollbar/project-scrollbar.component';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import {ProjectViewComponent} from './projects/project-view/project-view.component';
import {ProjectItemViewComponent} from './projects/project-list/project-item-view.component';
import {JwPaginationComponent} from 'jw-angular-pagination';
import {ProjectService} from './shared/Services/project.service';
import {InterceptorService} from './shared/Services/interceptor.service';
import {RoutingGuard} from "./shared/Gaurds/routing.guard";
import { AdminStatisticsComponent } from './user-page/admin/admin-statistics/admin-statistics.component';
import { AdminListPapersComponent } from './user-page/admin/admin-list-papers/admin-list-papers.component';
import { AdminListProjectsComponent } from './user-page/admin/admin-list-projects/admin-list-projects.component';
import { AdminListAccountsComponent } from './user-page/admin/admin-list-accounts/admin-list-accounts.component';
import {ClientProjectViewComponent} from "./projects/project-view/Client-component/client-project-view/client-project-view.component";
import {HomePageComponent} from "./user-page/client/home-page/home-page.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: GuestComponent},
  { path: 'home/client', component: HomePageComponent,
    canActivate: [RoutingGuard],
    data: {
      expectedRoles: ['client']
    }},
  { path: 'home/teacher', component: TeacherComponent,
    canActivate: [RoutingGuard],
    data: {
      expectedRoles: ['teacher']
    }},
  { path: 'home/student', component: StudentComponent,
    canActivate: [RoutingGuard],
    data: {
      expectedRoles: ['student']
    }},
  { path: 'home/admin', component: AdminComponent,
    canActivate: [RoutingGuard],
    data: {
      expectedRoles: ['admin']
    }},
  { path: 'projects',
    component: ProjectList,
    canActivate: [RoutingGuard],
    data: {
      expectedRoles: ['admin', 'client', 'teacher', 'student']
    }},
  { path: 'project/create',
    component: ClientComponent,
    canActivate: [RoutingGuard],
    data: {
      expectedRoles: ['client']
    }},
  { path: 'about', component: PaperListComponent },
  { path: 'archive',
    component: ProjectItemViewComponent,
    canActivate: [RoutingGuard],
    data: {
      expectedRoles: ['admin', 'client', 'teacher', 'student']
    }},
  { path: 'register', component: RegisterComponent },
  { path: 'register/clientRegister', component: RegisterClientComponent},
  { path: 'register/studentRegister', component: RegisterStudentComponent},
  { path: 'register/teacherRegister', component: RegisterTeacherComponent},
  { path: 'projectPage', component:
    ProjectViewComponent,
    canActivate: [RoutingGuard],
    data: {
      expectedRoles: ['admin', 'client', 'teacher', 'student']
    }},
  { path: 'projectPage', component: ProjectViewComponent},
  { path: 'admin/statistics', component: AdminStatisticsComponent },
  { path: 'admin/papers', component: AdminListPapersComponent },
  { path: 'admin/projects', component: AdminListProjectsComponent},
  { path: 'admin/accounts', component: AdminListAccountsComponent},
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
    // ProjectListFilterComponent,
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
    ProjectList,
    ProjectViewCardComponent,
    ProjectViewComponent,
    ClientProjectViewComponent,
    HomePageComponent
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
    RouterModule.forRoot(routes),
    MatAutocompleteModule,
    MatInputModule,
    MatListModule
  ],

  providers: [LoginService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}, RegisterService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
