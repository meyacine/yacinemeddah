import { Component } from '@angular/core';
import { Classe } from "../classe";
import { Observable } from "rxjs";
import { Select } from "@ngxs/store";
import { AppState } from "../state/app.state";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
  @Select(AppState.getClasses)
  classes$: Observable<Classe[]>;

  submitValue($event: any, clazz: any, nom: keyof Classe) {

  }

  delete(clazz: Classe) {

  }
}
