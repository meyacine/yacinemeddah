import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../student";
import {Classe} from "../classe";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Classe[]> {
    return this.http.get<{ students: Student[], classes: Classe[] }>('/assets/students.json')
      .pipe(
        map((all: { students: Student[], classes: Classe[] }) => all.classes)
      ) as Observable<Classe[]>;
  }
}
