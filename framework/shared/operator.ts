import Person from "./person";

type role = "checkout" | "salesman" | "logistic" | "owner";

export default class Operator extends Person {
  readonly role: role;

  constructor(name: string, cpf: string, role: role, login?: string, password?: string) {
    super(name, cpf, login, password);
    this.role = role;
  }
}
