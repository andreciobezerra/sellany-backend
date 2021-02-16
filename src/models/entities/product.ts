import IProduct from "@src/interfaces-types/product-interface";

class Product implements IProduct {
  readonly name: string;
  readonly price: number;
  readonly companyID: string;
  readonly details: string;

  constructor(name: string, price: number, companyID: string, details: string) {
    this.name = name;
    this.price = price;
    this.companyID = companyID;
    this.details = details;
  }
}

export default Product;