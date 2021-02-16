import IPerson from "@src/interfaces-types/person-interface";

abstract class Person implements IPerson {
  readonly name: string;
  readonly cpf: string;

  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = cpf;
  }
}

export default Person;
