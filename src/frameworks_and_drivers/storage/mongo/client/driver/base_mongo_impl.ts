import { IOperations, IOptions } from '../interfaces/ioperations';
import { MongoDriver } from './driver';

export abstract class BaseImplementation<TDom, TDal, FDom, FDal>
  extends MongoDriver<TDal, FDal>
  implements IOperations<TDom, FDom> {
  create (item: TDom): Promise<TDom> {
    throw new Error('Method not implemented.');
  }

  update (id: string, item: TDom): Promise<TDom | null> {
    throw new Error('Method not implemented.');
  }

  delete (id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  getAll (filter: FDom, options?: IOptions | undefined): Promise<TDom[]> {
    throw new Error('Method not implemented.');
  }

  getOne (id: string): Promise<TDom | null> {
    throw new Error('Method not implemented.');
  }

  countRegisters (filter: FDom): Promise<number> {
    throw new Error('Method not implemented.');
  }

  upsertDocs (query: any, item: TDom): Promise<TDom> {
    throw new Error('Method not implemented.');
  }

  createMany (item: TDom[]): Promise<TDom[]> {
    throw new Error('Method not implemented.');
  }
  // abstract create(item: TDom): Promise<TDom>;
  // abstract update(id: string, item: TDom): Promise<TDom | null>;
  // abstract delete(id: string): Promise<boolean>;
  // abstract getAll(filter: FDom, options: IOptions): Promise<TDom[]>;
  // abstract getOne(id: string): Promise<TDom | null>;
  // abstract countRegisters(filter: FDom): Promise<number>;
  // abstract upsertDocs(query: any, items: TDom): Promise<TDom>;
  // abstract createMany(item: TDom[]): Promise<TDom[]>;
}
