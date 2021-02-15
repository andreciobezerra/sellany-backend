class Product {
  private name: string;
  private price: number;
  private stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

export default Product;
