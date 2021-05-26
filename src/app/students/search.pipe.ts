import { Pipe, PipeTransform } from '@angular/core';
import {Personne} from "../personne";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Personne[], search: string): Personne[] {
    if (!value || !value.length) {
      return [];
    }
    const lowerCaseSearch = search.toLowerCase();
    return value.filter(p => p.nom.toLowerCase().includes(lowerCaseSearch) || p.prenom.toLowerCase().includes(lowerCaseSearch));
  }

}
