import { int } from "@src/interfaces-types/types";
import sqlite3 from "sqlite3";
const sqlite = sqlite3.verbose();

const db = new sqlite.Database("sellany.sqlite3", (err: any) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});

export default {
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
