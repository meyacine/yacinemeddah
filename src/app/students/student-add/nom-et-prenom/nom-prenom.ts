export class NomPrenom {
  nom: string = '';
  prenom: string = '';


  constructor(obj?: Partial<NomPrenom>) {
    Object.assign(this, obj);
  }
}
