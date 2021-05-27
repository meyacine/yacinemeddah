export class Student {
  nom: string;
  prenom: string;
  ddn?: string;

  constructor(nom: string, prenom: string, ddn: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.ddn = ddn;
  }
}
