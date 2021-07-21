import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { LoginComponent } from './login/login.component';
import { AuthenticationInterceptor } from "./security/authentication.interceptor";
import { SecurityInterceptor } from "./security.interceptor";
import { NgxsModule } from "@ngxs/store";
import { environment } from "../environments/environment";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { AppState } from "./state/app.state";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: !!environment.production
    }),
  ],
  providers: [
    // FIXME: Multiplte interceptors not working
    // @see https://dev.to/angular/that-s-why-your-angular-errorinterceptor-may-not-work-5-seconds-fix-52m8
    // also https://stackoverflow.com/questions/45633102/add-multiple-http-interceptors-to-angular-application
    {provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
