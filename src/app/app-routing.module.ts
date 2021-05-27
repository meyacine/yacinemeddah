import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
  {path: 'classes', loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
