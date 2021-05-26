import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { FullNamePipe } from './full-name.pipe';



@NgModule({
  declarations: [
    StudentsComponent,
    FullNamePipe
  ],
  exports: [
    StudentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
