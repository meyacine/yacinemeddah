import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../personne";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  @Input()
  personnes: Personne[] = [];

  @Output()
  deletePerson: EventEmitter<Personne> = new EventEmitter<Personne>();

  searchValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  delete(user: Personne): void {
    this.deletePerson.emit(user);
  }

  submitValue($event: string, user: Personne, key: keyof Personne): void {
    console.log($event);
  }
}
