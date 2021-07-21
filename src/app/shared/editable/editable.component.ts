import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss']
})
export class EditableComponent {
  @Output()
  valueChange = new EventEmitter<string>();
  formControl = new FormControl();
  isReadonly = true;

  private _value: string | undefined;

  get value(): string | undefined {
    return this._value;
  }

  @Input()
  set value(value: string | undefined) {
    this._value = value;
    this.formControl.setValue(this._value);
  }

  @HostListener('dblclick')
  switchMode(): void {
    this.isReadonly = false;
  }

  @HostListener('document:keydown.escape')
  switchReadonly(): void {
    this.isReadonly = true;
  }

  submitValue(value: string | undefined): void {
    this.valueChange.emit(value);
    this.isReadonly = !this.isReadonly;
  }
}
