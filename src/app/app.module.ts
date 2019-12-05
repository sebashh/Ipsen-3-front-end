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
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { PaperListComponent } from './papers/paper-list/paper-list.component';
import { PaperItemComponent } from './papers/paper-list/paper-item/paper-item.component';
import {LoginService} from './shared/login-service';
import {RegisterService} from './shared/register-service';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule, MatExpansionModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    ProjectListComponent,
    ProjectItemComponent,
    PaperListComponent,
    PaperItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatExpansionModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
