import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../student";
import {Observable, of} from "rxjs";
import {Classe} from "../classe";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {
    // FIXME: Le retour reseau est asynchone et peut parfois ne pas afficher les data lorsque le findAll est appelé
    this.http.get<{ students: Student[], classes: Classe[] }>('/assets/students.json')
      .subscribe(data => {
        localStorage.setItem('students', JSON.stringify(data.students));
        localStorage.setItem('classes', JSON.stringify(data.classes));
      });
  }

  findAll(): Observable<Student[]> {
    return of(this.students());
  }

  private students(): Student[] {
    const students = JSON.parse(localStorage.getItem('students') as string) as Student[];
    return students.map(s => new Student(s));
  }

  add(student: Student): void {
    localStorage.setItem('students', JSON.stringify([...this.students(), student]));
  }

  delete(student: Student): Student[] {
    const students = this.students();
    const studentsFiltered = students.filter(p => !(p.nom === student.nom && p.prenom === student.prenom && p.ddn === student.ddn));
    localStorage.setItem('students', JSON.stringify(studentsFiltered));
    return studentsFiltered;
  }
}
