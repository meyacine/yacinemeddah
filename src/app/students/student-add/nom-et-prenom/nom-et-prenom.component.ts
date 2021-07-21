import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { NomPrenom } from "./nom-prenom";

@Component({
  selector: 'app-nom-et-prenom',
  templateUrl: './nom-et-prenom.component.html',
  styleUrls: ['./nom-et-prenom.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NomEtPrenomComponent), multi: true},
  ]
})
export class NomEtPrenomComponent implements OnInit, ControlValueAccessor {

  innerForm = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
    prenom: new FormControl(null, [Validators.required]),
  });

  constructor() {
  }

  get nomControl(): FormControl {
    return this.innerForm.get('nom') as FormControl;
  }

  get prenomControl(): FormControl {
    return this.innerForm.get('prenom') as FormControl;
  }

  onChange: any = () => {
  }

  onTouch: any = () => {
  }

  ngOnInit(): void {
    this.innerForm.valueChanges.subscribe((value: NomPrenom) => {
      this.onChange(value);
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: NomPrenom): void {
    this.innerForm.patchValue(obj);
  }

}
