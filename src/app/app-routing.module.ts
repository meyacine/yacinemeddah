import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { IsLoggedGuard } from "./security/is-logged.guard";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [IsLoggedGuard]},
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule),
    canActivate: [IsLoggedGuard],
  },
  {
    path: 'classes',
    loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule),
    canActivate: [IsLoggedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
