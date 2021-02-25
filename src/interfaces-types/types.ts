import Company from "@src/models/entities/company";
import Owner from "@src/models/entities/owner";
import Product from "@src/models/entities/product";

export type int = number & { __int__: void };

export type Entity = Product | Company | Owner;

export type Data = Record<string, string | number | Array<string> | Entity | Array<Owner>>;
