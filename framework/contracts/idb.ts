export default interface IDB {
  create(elem: unknown): void;
  read(id: string): unknown;
  readAll(): Array<unknown>;
  update(id: string, newData: Record<string, unknown>): void;
  delete(id: string): void;
}
