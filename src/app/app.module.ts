import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { FooterComponent } from './footer/footer.component';
import { ClientComponent } from './client/client.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    StatisticsComponent,
    RegisterComponent,
    ProjectsComponent,
    NotificationsComponent,
    LoginComponent,
    GuestComponent,
    FooterComponent,
    ClientComponent,
    TeacherComponent,
    AdminComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
