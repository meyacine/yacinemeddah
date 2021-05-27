export class Student {
  // @ts-ignore
  nom: string;
  // @ts-ignore
  prenom: string;
  ddn?: string;

  constructor(obj?: Partial<Student>) {
    Object.assign(this, obj);
  }

}
