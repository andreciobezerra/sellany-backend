import Owner from "./owner";

class Company {
  readonly companyName: string;
  readonly fantasy: string;
  readonly cnpj: string;
  readonly owners: Array<Owner>;

  constructor(companyName: string, fantasy: string, cnpj: string, owner: Record<string, string>) {
    this.companyName = companyName;
    this.fantasy = fantasy;
    this.cnpj = cnpj;
    this.owners = [new Owner(owner.name, owner.cpf, this)];
  }
}

export default Company;
