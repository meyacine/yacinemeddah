import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const dependencies = [
  CommonModule
];

@NgModule({
  imports: dependencies,
  exports: [...dependencies],
})
export class SecurityModule {

}
