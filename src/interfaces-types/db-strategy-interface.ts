import type { Data, Entity } from "./types";

interface IDBStrategy {
  create(elem: Entity): void;
  read(id: string): Entity;
  readAll(): Array<Entity>;
  update(id: string, newData: Data): void;
  delete(id: string): void;
}

export default IDBStrategy;
