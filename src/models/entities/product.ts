class Product {
  private name: string;
  private price: number;
  private companyID: string;
  private details: string;

  constructor(name: string, price: number, companyID: string, details: string) {
    this.name = name;
    this.price = price;
    this.companyID = companyID;
    this.details = details;
  }
}

export default Product;
