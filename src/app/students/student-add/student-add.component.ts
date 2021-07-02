import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentsService} from "../students.service";
import {Student} from "../../student";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  form = new FormGroup({
    nomPrenom: new FormControl(null, [Validators.required]),
    dateNaissance: new FormControl(null, [Validators.required]),
  });

  constructor(private studentService: StudentsService, private router: Router) { }

  ngOnInit(): void {

  }

  get dateNaissanceControl(): FormControl {
    return this.form.get('dateNaissance') as FormControl;
  }

  submit(): void {
    if (this.form.valid) {
      const formValue = this.form.value;
      const student = new Student({
        nom: formValue.nomPrenom.nom,
        prenom: formValue.nomPrenom.prenom,
        ddn: formValue.dateNaissance,
      });
      this.studentService.add(student);
      this.router.navigate(['/students']);
    }
  }
}
