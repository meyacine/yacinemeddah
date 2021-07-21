import { Student } from "../student";

export namespace App {
  export class Load {
    static readonly type = '[LOAD] Chargement des données';

    constructor() {
    }
  }

  export class AddStudent {
    static readonly type = `[STUDENT] Ajout d'un étudiant`;

    constructor(public student: Student) {
    }
  }

  export class DeleteStudent {
    static readonly type = `[STUDENT] Suppression d'un étudiant`;

    constructor(public student: Student) {
    }
  }
}
