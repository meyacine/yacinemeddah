import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../personne";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  @Input()
  personnes: Personne[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
