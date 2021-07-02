import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Student} from '../student';
import {Observable} from "rxjs";
import {StudentsService} from "./students.service";

@Injectable({
  providedIn: 'root',
})
export class StudentsResolver implements Resolve<Student[]>{

  constructor(private studentService: StudentsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Student[]> | Promise<Student[]> | Student[] {
    return this.studentService.findAll();
  }
}
