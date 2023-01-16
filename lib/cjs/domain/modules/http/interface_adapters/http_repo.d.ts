export interface IHttpOperations<T, TOptions = any> {
    get(url: string, options?: TOptions): Promise<T>;
    post(url: string, body: any, options?: TOptions): Promise<T>;
    put(url: string, body: any, options?: TOptions): Promise<T>;
    delete(url: string, options?: any): Promise<any>;
}
export declare class HttpRepository<T, TOptions = any> implements IHttpOperations<T, TOptions> {
    private implementation;
    constructor(impl: IHttpOperations<T, TOptions>);
    get(url: string, options?: TOptions | undefined): Promise<T>;
    post(url: string, body: any, options?: TOptions | undefined): Promise<T>;
    put(url: string, body: any, options?: TOptions | undefined): Promise<T>;
    delete(url: string, options?: any): Promise<any>;
}
