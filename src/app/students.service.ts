import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "./student";
import {Observable} from "rxjs";
import {Classe} from "./classe";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<{ students: Student[]; classes: Classe[] }> {
    return this.http.get('/assets/students.json') as Observable<{ students: Student[], classes: Classe[] }>;
  }
}
