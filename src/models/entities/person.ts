abstract class Person {
  private name: string;
  private cpf: string;

  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = cpf;
  }
}

export default Person;
