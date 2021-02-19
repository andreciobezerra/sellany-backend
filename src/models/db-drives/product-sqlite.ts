import IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import type Product from "../entities/product";
import type { Data } from "@src/interfaces-types/types";
import sqliteDrive from "@src/../database/sqlite3DB";

class ProductSQLite implements IDBStrategy {
  private dbDrive = new sqliteDrive();
  private db = this.dbDrive.getDB();

  create(product: Product): void {
    this.db
      .prepare("INSERT INTO product ( nome, preco, companyID, descricao )  VALUES ( ?,?,?,?)")
      .run(product.name, product.price, product.companyID, product.details);
  }

  read(id: string): Product {
    const product = this.db.prepare("SELECT * from product WHERE id = ?").get(id);

    return (product as unknown) as Product;
  }

  readAll(): Array<Product> {
    return this.db.prepare('SELECT id ,nome, preco, companyID, descricao FROM "product"').all();
  }

  update(id: string, newData: Data): void {
    throw new Error("Method not implemented.");
  }

  delete(id: string): void {
    throw new Error("Method not implemented.");
  }

  close(): void {
    this.db.close();
  }
}

export default ProductSQLite;
