import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentsService} from "../students.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  personnes: Student[] = [];

  searchValue = '';

  constructor(private studentService: StudentsService) {
  }

  ngOnInit(): void {
    this.studentService.findAll()
      .pipe(
        map(data => data.students),
        tap(students => this.personnes = students),
      ).subscribe();
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
