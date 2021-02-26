import type Client from "@src/models/entities/client";
import type Company from "@src/models/entities/company";
import type Order from "@src/models/entities/order";
import type Owner from "@src/models/entities/owner";
import type Product from "@src/models/entities/product";
import type Salesman from "@src/models/entities/salesman";

export type int = number & { __int__: void };

export type Entity = Product | Company | Owner | Order | Client | Salesman;

export type Data = Record<string, string | number | Array<string> | Entity | Array<Entity>>;
