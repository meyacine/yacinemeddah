import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./students.component";
import {StudentsResolver} from "./students.resolver";

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    resolve: {
      students: StudentsResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
