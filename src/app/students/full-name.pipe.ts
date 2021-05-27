import { Pipe, PipeTransform } from '@angular/core';
import {Student} from "../student";

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Student): string {
    if (!value) {
      return '';
    }

    if (!value.nom && !value.prenom) {
      return 'Student inconnue';
    }

    return `${value.prenom.toUpperCase()[0]}.${value.nom.toUpperCase()}`;
  }

}
