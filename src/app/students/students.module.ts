import {NgModule} from '@angular/core';
import {StudentsComponent} from './students.component';
import {FullNamePipe} from './full-name.pipe';
import {SearchPipe} from './search.pipe';
import {SharedModule} from "../shared/shared.module";


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
    SharedModule,
  ]
})
export class StudentsModule { }
