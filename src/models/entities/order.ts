import Client from "./client";
import type Company from "./company";
import type Product from "./product";
import type Salesman from "./salesman";

class Order {
  readonly company: Company;
  readonly client: Client;
  readonly salesman: Salesman;
  readonly products: Array<Product> = [];

  constructor(company: Company, client: Client, salesman: Salesman) {
    this.company = company;
    this.client = client;
    this.salesman = salesman;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
}

export default Order;
