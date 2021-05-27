import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {StudentsModule} from "./students/students.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SecurityInterceptor} from "./security.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StudentsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
