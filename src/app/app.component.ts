import { Component } from '@angular/core';
import {Personne} from "./personne";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  donnees: Personne[] = [
    {nom: '', prenom: '', ddn: '1999-08-14'},
    {nom: 'Bozant', prenom: 'Jérémie', ddn: '1981-08-24'},
    {nom: 'Astier', prenom: 'Carole', ddn: '1995-12-01'},
  ];

  handleDelete($event: Personne) {
    this.donnees = this.donnees.filter(p => p!=$event);
  }
}
