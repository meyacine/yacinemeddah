import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../student';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { App } from '../../state/app.actions';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent {

  form = new FormGroup({
    nomPrenom: new FormControl(null, [Validators.required]),
    dateNaissance: new FormControl(null, [Validators.required]),
  });

  constructor(private router: Router, private store: Store) {
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
      this.store.dispatch(new App.AddStudent(student));
      this.router.navigate(['/students']);
    }
  }
}
