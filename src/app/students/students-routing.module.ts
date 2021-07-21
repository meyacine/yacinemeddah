import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from "./students.component";
import { StudentAddComponent } from "./student-add/student-add.component";

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
  },
  {
    path: 'add',
    component: StudentAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {
}
