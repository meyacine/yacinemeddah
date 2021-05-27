import {NgModule} from '@angular/core';
import {StudentsComponent} from './students.component';
import {FullNamePipe} from './full-name.pipe';
import {SearchPipe} from './search.pipe';
import {SharedModule} from "../shared/shared.module";
import {StudentsRoutingModule} from "./students-routing.module";


@NgModule({
  declarations: [
    StudentsComponent,
    FullNamePipe,
    SearchPipe
  ],
  imports: [
    SharedModule,
    StudentsRoutingModule,
  ]
})
export class StudentsModule { }
