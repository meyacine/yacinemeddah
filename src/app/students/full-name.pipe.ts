import { Pipe, PipeTransform } from '@angular/core';
import {Personne} from "../personne";

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Personne): string {
    if (!value) {
      return '';
    }

    if (!value.nom && !value.prenom) {
      return 'Personne inconnue';
    }

    return `${value.prenom.toUpperCase()[0]}.${value.nom.toUpperCase()}`;
  }

}
