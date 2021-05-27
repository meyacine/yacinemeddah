import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../student";
import {Observable} from "rxjs";
import {Classe} from "../classe";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Student[]> {

    return this.http.get<{ students: Student[], classes: Classe[] }>('/assets/students.json')
      .pipe(
        map((all: { students: Student[], classes: Classe[] }) => all.students)
      ) as Observable<Student[]>;
  }
}
