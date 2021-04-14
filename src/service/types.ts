import type Client from "../../framework/shared/client";
import type Company from "./company";
import type Order from "./order";
import type Owner from "./owner";
import type Product from "./product";
import type Salesman from "./salesman";

export type int = number & { __int__: void };

export type Entity = Product | Company | Owner | Order | Client | Salesman;

export type Data = Record<string, string | number | Array<string> | Entity | Array<Entity>>;
