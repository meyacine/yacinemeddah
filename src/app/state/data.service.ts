import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "../student";
import { Classe } from "../classe";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<{ students: Student[], classes: Classe[] }> {
    return this.http.get<{ students: Student[], classes: Classe[] }>('./assets/students.json');
  }
}
