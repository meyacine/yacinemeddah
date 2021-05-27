import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  @Input()
  personnes: Student[] = [];

  @Output()
  deletePerson: EventEmitter<Student> = new EventEmitter<Student>();

  searchValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  delete(user: Student): void {
    this.deletePerson.emit(user);
  }

  submitValue($event: string, user: Personne, key: keyof Personne): void {
    console.log($event);
  }
}
