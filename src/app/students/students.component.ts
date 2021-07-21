import { Component, OnInit } from '@angular/core';
import { Student } from "../student";
import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Select, Store } from "@ngxs/store";
import { AppState } from "../state/app.state";
import { App } from "../state/app.actions";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  @Select(AppState.getStudents)
  students$: Observable<Student[]>;


  personnes: Student[] = [];

  searchValue = '';

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.students$.pipe(tap(students => this.personnes = students)).subscribe();
  }

  delete(user: Student) {
    this.store.dispatch(new App.DeleteStudent(user));
  }

  submitValue($event: string, user: Student, key: keyof Student): void {
    this.personnes = this.personnes.map(personne => {
      if (personne == user) {
        return new Student({
          ...personne,
          [key]: $event,
        });
      }
      return personne;
    });
  }
}
