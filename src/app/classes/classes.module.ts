import { NgModule } from '@angular/core';
import { ClassesComponent } from './classes.component';
import { SharedModule } from "../shared/shared.module";
import { ClassesRoutingModule } from "./classes-routing.module";


@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    SharedModule,
    ClassesRoutingModule,
  ]
})
export class ClassesModule {
}
