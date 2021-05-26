import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { FullNamePipe } from './full-name.pipe';
import { SearchPipe } from './search.pipe';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    StudentsComponent,
    FullNamePipe,
    SearchPipe
  ],
  exports: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class StudentsModule { }
