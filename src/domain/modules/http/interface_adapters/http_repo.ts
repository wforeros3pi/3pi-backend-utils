export interface IHttpOperations<T, TOptions = any> {
  get(url: string, options?: TOptions): Promise<T>;
  post(url: string, body: any, options?: TOptions): Promise<T>;
  put(url: string, body: any, options?: TOptions): Promise<T>;
  delete(url: string, options?: any): Promise<any>
}

export class HttpRepository<T, TOptions = any> implements IHttpOperations<T, TOptions> {
  private implementation: IHttpOperations<T, TOptions>;
  constructor (impl: IHttpOperations<T, TOptions>) {
    this.implementation = impl;
  }

  async get (url: string, options?: TOptions | undefined): Promise<T> {
    return await this.implementation.get(url, options);
  }

  async post (url: string, body: any, options?: TOptions | undefined): Promise<T> {
    return this.implementation.post(url, body, options);
  }

  async put (url: string, body: any, options?: TOptions | undefined): Promise<T> {
    return await this.implementation.put(url, body, options);
  }

  async delete (url: string, options?: any) {
    return await this.implementation.delete(url, options);
  }
}
