import * as sqlite3 from "@src/models/db-drives/product-sqlite-drive";

describe("Test the operation of DB driver ProductDrive", () => {
  test("Has a strategy?", () => {
    const teste1 = sqlite3.default.getProductList((res: any) => console.log(res));
    console.log(teste1);
  });
});
