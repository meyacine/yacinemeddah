import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss']
})
export class EditableComponent implements OnInit {

  @Input()
  value: string | undefined;

  @Output()
  valueChange = new EventEmitter<string>();

  isReadonly = true;

  @HostListener('dblclick')
  switchMode(): void {
    this.isReadonly = false;
  }

  @HostListener('document:keydown.escape')
  switchReadonly(): void {
    this.isReadonly = true;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  submitValue(value: string | undefined): void {
    this.valueChange.emit(value);
    this.isReadonly = !this.isReadonly;
  }
}
