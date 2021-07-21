import { NgModule } from '@angular/core';
import { StudentsComponent } from './students.component';
import { FullNamePipe } from './full-name.pipe';
import { SearchPipe } from './search.pipe';
import { SharedModule } from "../shared/shared.module";
import { StudentsRoutingModule } from "./students-routing.module";
import { StudentAddComponent } from './student-add/student-add.component';
import { NomEtPrenomComponent } from './student-add/nom-et-prenom/nom-et-prenom.component';


@NgModule({
  declarations: [
    StudentsComponent,
    FullNamePipe,
    SearchPipe,
    StudentAddComponent,
    NomEtPrenomComponent
  ],
  imports: [
    SharedModule,
    StudentsRoutingModule,
  ]
})
export class StudentsModule {
}
