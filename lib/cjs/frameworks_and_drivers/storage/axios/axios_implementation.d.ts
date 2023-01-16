import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IHttpOperations } from '@http/interface_adapters/http_repo';
export declare class AxiosImplementation implements IHttpOperations<AxiosResponse, AxiosRequestConfig> {
    basePath: string;
    constructor(basepath: string);
    get<T = any, D = any>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T, D>>;
    post<T = any, D = any>(path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T, D>>;
    put<T = any, D = any>(path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T, D>>;
    delete<T = any, D = any>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T, D>>;
}
