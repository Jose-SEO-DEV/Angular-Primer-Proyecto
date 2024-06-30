import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { MyHeader2Component } from './components/my-header-2/my-header-2.component';
import { MyHeader3Component } from './components/my-header-3/my-header-3.component';
import { MySidebarComponent } from './components/my-sidebar/my-sidebar.component';
import { StudentsPageComponent } from './components/students-page/students-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyHeader2Component,
    MyHeader3Component,
    MySidebarComponent,
    StudentsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
