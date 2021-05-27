import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableComponent } from './editable/editable.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EditableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    EditableComponent,
  ]
})
export class SharedModule { }
