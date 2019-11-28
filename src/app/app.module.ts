import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { StudentComponent } from './user-page/student/student.component';
import { TeacherComponent } from './user-page/teacher/teacher.component';
import { GuestComponent } from './user-page/guest/guest.component';
import { AdminComponent } from './user-page/admin/admin.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { PaperListComponent } from './papers/paper-list/paper-list.component';
import { PaperItemComponent } from './papers/paper-list/paper-item/paper-item.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
