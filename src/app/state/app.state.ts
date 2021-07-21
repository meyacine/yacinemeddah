import { Classe } from "../classe";
import { Student } from "../student";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { App } from "./app.actions";
import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

interface AppStateModel {
  classes: Classe[],
  students: Student[],
}

const intialValue: AppStateModel = {
  classes: [],
  students: [],
};

@State<AppStateModel>({
  name: 'app',
  defaults: intialValue,
})
@Injectable()
export class AppState {


  constructor(private dataService: DataService) {
  }

  @Selector()
  static getStudents(state: AppStateModel): Student[] {
    return state.students;
  }

  @Selector()
  static getClasses(state: AppStateModel): Classe[] {
    return state.classes;
  }

  @Action(App.Load)
  load(ctx: StateContext<AppStateModel>): Observable<{ students: Student[]; classes: Classe[] }> {
    return this.dataService.findAll().pipe(
      tap(data => {
        ctx.patchState(data);
      }),
    );
  }

  @Action(App.AddStudent)
  addStudent(ctx: StateContext<AppStateModel>, action: App.AddStudent) {
    const students = ctx.getState().students;
    return ctx.patchState({students: [...students, action.student]});
  }

  @Action(App.DeleteStudent)
  deleteStudent(ctx: StateContext<AppStateModel>, action: App.DeleteStudent) {
    const students = ctx.getState().students;
    return ctx.patchState({students: students.filter(s => s !== action.student)});
  }
}
