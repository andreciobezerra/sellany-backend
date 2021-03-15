import Person from "./person";
import Company from "./company";

class Owner extends Person {
  private company: Company;

  constructor(name: string, cpf: string, company: Company) {
    super(name, cpf);
    this.company = company;
  }
}

export default Owner;
