import type Order from "../../src/service/order";
import Person from "./person";

type address = {
  street: string;
  neighborhood: string;
  number: number & { __int__: void };
  city: string;
  state: string;
  country: string;
};

class Client extends Person {
  readonly orders: Array<Order> = [];
  readonly address: address;

  constructor(name: string, cpf: string, address: address, login?: string, password?: string) {
    super(name, cpf, login, password);
    this.address = address;
  }
}

export default Client;
