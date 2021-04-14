import Person from "./person";

export default class Admin extends Person {
  readonly role = "admin";

  constructor(name: string, cpf: string, login?: string, password?: string) {
    super(name, cpf, login, password);
  }
}
