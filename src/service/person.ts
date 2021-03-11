abstract class Person {
  readonly name: string;
  readonly cpf: string;

  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = cpf;
  }
}

export default Person;
