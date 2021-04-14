import Person from "../../framework/shared/person";
import type Company from "./company";
import type Order from "./order";

class Salesman extends Person {
  readonly sells: Array<Order> = [];
  readonly company: Company;

  constructor(name: string, cpf: string, company: Company) {
    super(name, cpf);
    this.company = company;
  }

  calculeComission(sell: Order): number {
    return sell.products.reduce((total, item) => (total += item.price * item.percentual), 0);
  }
}

export default Salesman;
