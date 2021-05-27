import {Component, OnInit} from '@angular/core';
import {Student} from "./student";
import {StudentsService} from "./students.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  donnees: Student[] = [];


  constructor(private studentService: StudentsService) {
  }

  handleDelete($event: Student) {
    this.donnees = this.donnees.filter(p => p != $event);
  }

  ngOnInit(): void {
    this.studentService.findAll()
      .pipe(
        map(data => data.students),
        tap(students => this.donnees = students),
      ).subscribe();
  }
}
