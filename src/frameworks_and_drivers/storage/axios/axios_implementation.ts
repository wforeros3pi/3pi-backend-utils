import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IHttpOperations } from '@http/interface_adapters/http_repo';

export class AxiosImplementation implements IHttpOperations<AxiosResponse, AxiosRequestConfig> {
  basePath: string;

  constructor (basepath: string) {
    this.basePath = basepath;
  }

  async get<T = any, D = any> (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T, D>> {
    return await axios.get(`${this.basePath}${path}`, config);
  }

  async post<T = any, D = any> (path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T, D>> {
    return await axios.post(`${this.basePath}${path}`, data, config);
  }

  async put<T = any, D = any> (path: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T, D>> {
    return await axios.put(`${this.basePath}${path}`, data, config);
  }

  async delete<T = any, D = any> (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T, D>> {
    return await axios.delete(`${this.basePath}${path}`, config);
  }
}
