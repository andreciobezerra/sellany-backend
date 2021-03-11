import type Order from "./order";
import Person from "./person";

class Client extends Person {
  readonly order: Array<Order> = [];

  constructor(name: string, cpf: string) {
    super(name, cpf);
  }
}

export default Client;
