abstract class Person {
  readonly name: string;
  readonly cpf: string;
  readonly login?: string;
  readonly password?: string;

  constructor(name: string, cpf: string, login?: string, password?: string) {
    this.name = name;
    this.cpf = cpf;
    this.login = login;
    this.password = password;
  }
}

export default Person;
