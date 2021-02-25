class Product {
  readonly name: string;
  readonly price: number;
  readonly companyID: string;
  readonly details: string;
  readonly percentual: number;

  constructor(name: string, price: number, companyID: string, details: string, percentual: number) {
    this.name = name;
    this.price = price;
    this.companyID = companyID;
    this.percentual = percentual;
    this.details = details;
  }
}

export default Product;
