import IDBStrategy from "./db-strategy-interface";
import type Product from "@src/service/product";
import type { Data } from "@src/service/types";
import sqliteDrive from "@database/sqlite3DB";

class ProductSQLite implements IDBStrategy {
  private dbDrive = new sqliteDrive();
  private db = this.dbDrive.getDB();

  create(product: Product): void {
    this.db
      .prepare(
        "INSERT INTO product ( name, price, companyID, details, percentual )  VALUES ( ?,?,?,?,?)"
      )
      .run(product.name, product.price, product.companyID, product.details, product.percentual);
  }

  read(id: string): Product {
    const product = this.db.prepare("SELECT * from product WHERE id = ?").get(id);

    return (product as unknown) as Product;
  }

  readAll(): Array<Product> {
    return this.db.prepare('SELECT * FROM "product"').all();
  }

  update(id: string, newData: Data): void {
    const columns = Object.keys(newData)
      .map((key) => `${key} = '${newData[key]}'`)
      .join(", ");

    this.db.prepare(`UPDATE product SET ${columns} WHERE id=${id}`).run();
  }

  delete(id: string): void {
    this.db.prepare(`DELETE from product WHERE id=${id}`).run();
  }

  clear(): void {
    this.db.prepare("DELETE from product").run();
    this.db.prepare("DELETE from sqlite_sequence WHERE name='product'").run();
  }
}

export default ProductSQLite;
