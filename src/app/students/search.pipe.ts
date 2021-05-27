import { Pipe, PipeTransform } from '@angular/core';
import {Student} from "../student";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Student[], search: string): Student[] {
    if (!value || !value.length) {
      return [];
    }
    const lowerCaseSearch = search.toLowerCase();
    return value.filter(p => p.nom.toLowerCase().includes(lowerCaseSearch) || p.prenom.toLowerCase().includes(lowerCaseSearch));
  }

}
