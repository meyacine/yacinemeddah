import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./students.component";
import {StudentsResolver} from "./students.resolver";
import {StudentAddComponent} from "./student-add/student-add.component";

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    resolve: {
      students: StudentsResolver,
    }
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
