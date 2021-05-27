import { Component, OnInit } from '@angular/core';
import {ClassesService} from "./classes.service";
import {tap} from "rxjs/operators";
import {Classe} from "../classe";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  classes: Classe[] = [];
  searchValue = '';

  constructor(private classesService: ClassesService) { }

  ngOnInit(): void {
    this.classesService.findAll().pipe(tap(classes => this.classes = classes)).subscribe();
  }

  submitValue($event: any, clazz: any, nom: keyof Classe) {

  }

  delete(clazz: Classe) {

  }
}
