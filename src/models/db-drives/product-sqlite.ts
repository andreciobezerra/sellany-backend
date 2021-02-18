import IDBStrategy from "@src/interfaces-types/db-strategy-interface";
import type Product from "../entities/product";
import type { Data } from "@src/interfaces-types/types";
import sqliteDrive from "@src/../database/sqlite3DB";

class ProductSQLite implements IDBStrategy {
  private dbDrive = new sqliteDrive();
  private db = this.dbDrive.getDB();

  create(product: Product): void {
    this.db.run("INSERT INTO product ( nome, preco, companyID, descricao )  VALUES ( ?,?,?,?)", [
      product.name,
      product.price,
      product.companyID,
      product.details,
    ]);
  }
  read(id: string): Product {
    throw new Error("Method not implemented.");
  }

  readAll(): Array<Product> {
    const products: string | any[] = [];

    this.db.all("SELECT * FROM product", (err: any, res: any) => {
      products.concat(res);
    });

    return products;
  }
  update(id: string, newData: Data): void {
    throw new Error("Method not implemented.");
  }
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }
}

export default ProductSQLite;
/* export default {
  getProductList: function (callback: any) {
    db.all("SELECT * FROM product", function (err: any, res: any) {
      callback(res);
    });
  },
  addProduct: function (nomeProduct: string, callback: any) {
    db.run(
      "INSERT INTO product VALUES ($nome)",
      {
        $nome: nomeProduct,
      },
      function () {
        callback();
      }
    );
  },

  deleteProduct: function (id: int, callback: any) {
    db.run(
      "DELETE FROM todo WHERE id=$id",
      {
        $id: 1,
      },
      function () {
        callback();
      }
    );
  },
};

db.close((err: any) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
 */
