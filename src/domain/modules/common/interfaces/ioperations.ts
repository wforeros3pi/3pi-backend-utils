export interface IOptions {
  skip?: number;
  limit?: number;
  sort?: any;
}

export interface IOperations<T, FDom> {
  // Writing
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T | null>;
  delete(id: string): Promise<boolean>;
  // Reading
  getAll(filter: FDom, options?: IOptions): Promise<T[]>;
  getOne(id: string): Promise<T | null>;
  countRegisters(filter: FDom): Promise<number>;
  // Bulk operations
  upsertDocs(query: any, item: T): Promise<T>;
  createMany(item: T[]): Promise<T[]>;
}
