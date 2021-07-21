import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './app.state';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  imports: [CommonModule, RouterTestingModule, HttpClientTestingModule, NgxsModule.forRoot([AppState])],
  exports: [CommonModule, RouterTestingModule, HttpClientTestingModule],
  providers: [DataService],
})
export class AppStateTestingModule {

}
