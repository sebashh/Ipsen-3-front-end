import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './templates/topbar/topbar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './view/guest/guest.component';
import { FooterComponent } from './templates/footer/footer.component';
import { ClientComponent } from './client/client.component';
import { TeacherComponent } from './view/teacher/teacher.component';
import { AdminComponent } from './view/admin/admin.component';
import { StudentComponent } from './view/student/student.component';
import { ModelComponent } from './model/model.component';
import { ControllerComponent } from './controller/controller.component';
import { ViewComponent } from './view/view.component';
import { ServicesComponent } from './services/services.component';
import { TemplateComponent } from './template/template.component';
import { TemplatesComponent } from './templates/templates.component';

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
    StudentComponent,
    ModelComponent,
    ControllerComponent,
    ViewComponent,
    ServicesComponent,
    TemplateComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
