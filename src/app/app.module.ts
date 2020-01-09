import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
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
import { ProjectListFilterComponent } from './projects/project-list/project-list-filter.component';
// import { ProjectItemViewComponent } from './projects/project-list/project-item-view.component';
// Waarom voegt hij bovenstaande toe bij projects.module.ts??
import { ProjectViewCardComponent} from './projects/project-view-card/project-view-card.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { PaperListComponent } from './papers/paper-list/paper-list.component';
import { PaperItemComponent } from './papers/paper-list/paper-item/paper-item.component';
import {LoginService} from './user/login/login-service';
import {RegisterService} from './user/register/register-service';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatExpansionModule, MatIconModule, MatSelectModule, MatGridListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { RegisterStudentComponent } from './user/register/register-student/register-student.component';
import { RegisterClientComponent } from './user/register/register-client/register-client.component';
import { RegisterTeacherComponent } from './user/register/register-teacher/register-teacher.component';
import { SidebarModule } from 'ng-sidebar';
import {ClientComponent} from './user-page/client/client.component';
import {UserPageModule} from './user-page/user-page.module';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsModule} from './projects/projects.module';
import { ClientMyProjectsComponent } from './user-page/client/client-my-projects/client-my-projects.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: 'home', component: PaperListComponent},
  { path: 'projects', component: ProjectListFilterComponent},
  { path: 'about', component: PaperListComponent },
  { path: 'archive', component: ProjectListFilterComponent },
  { path: 'register', component: PaperItemComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopbarComponent,
    StudentComponent,
    TeacherComponent,
    GuestComponent,
    ProjectViewCardComponent,
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
    ClientComponent,
    ClientMyProjectsComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
