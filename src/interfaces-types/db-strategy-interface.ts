import type { Entity } from "./types";

interface IDBStrategy {
  create(elem: Entity): void;
  read(id: string): Entity;
  readAll(): Array<Entity>;
  update(id: string, newData: Record<string, string | number>): void;
  delete(id: string): void;
}

export default IDBStrategy;
