import IDBStrategy from "./db-strategy-interface";

interface IDBDrive extends IDBStrategy {
  strategy: IDBStrategy;
}

export default IDBDrive;
