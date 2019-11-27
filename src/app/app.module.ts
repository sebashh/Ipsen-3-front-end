import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { ControllerComponent } from './controller/controller.component';
import { ViewComponent } from './view/view.component';
import { ServicesComponent } from './services/services.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    ControllerComponent,
    ViewComponent,
    ServicesComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
