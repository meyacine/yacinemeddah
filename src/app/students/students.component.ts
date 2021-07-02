import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {map, tap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  personnes: Student[] = [];

  searchValue = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const data = this.route.data as Observable<{ students: Student[] }>;
    data.pipe(map(({students}) => students)).pipe(tap(students => this.personnes = students)).subscribe();
  }

  delete(user: Student) {
    this.personnes = this.personnes.filter(p => p != user);
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
