import type IProduct from "./product-interface";

export type int = number & { __int__: void };

export type Entity = IProduct;
