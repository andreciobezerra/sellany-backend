import type Product from "@src/models/entities/product";

export type int = number & { __int__: void };

export type Entity = Product;

export type Data = Record<string, string | number | Array<string>>;
