import { Component } from '@angular/core';
import {Personne} from "./personne";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  donnees: Personne[] = [
    {nom: 'LM', prenom: 'Bilel'},
    {nom: 'BOZANT', prenom: 'Jérémie'},
    {nom: 'ASTIER', prenom: 'Carole'},
  ];
}
