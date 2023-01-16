import { ICacheOperations } from '@common/interfaces/icacheoperations';
export declare class CacheRepository implements ICacheOperations<string> {
    implement: ICacheOperations<string>;
    constructor(implement: ICacheOperations<string>);
    getTTL(key: string): Promise<number>;
    getAll(opts: any, options?: any): Promise<string[]>;
    getOne(key: string, options?: any): Promise<any | null>;
    createOne(key: string, item: string, options?: any): Promise<any>;
    deleteOne(key: string, options?: any): Promise<boolean>;
}
