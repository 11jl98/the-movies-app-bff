import { Injectable } from '@nestjs/common';
import { AxiosHeaders, AxiosInstance, RawAxiosRequestHeaders } from 'axios';

@Injectable()
export class HttpService {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  async get<T = any>(
    endpoint: string,
    headers?: RawAxiosRequestHeaders | AxiosHeaders,
  ): Promise<T> {
    const response = await this.axiosInstance.get(endpoint, { headers });
    return response.data;
  }

  async post(
    endpoint: string,
    body = {},
    headers?: RawAxiosRequestHeaders | AxiosHeaders,
  ) {
    const response = await this.axiosInstance.post(endpoint, body, { headers });
    return response.data;
  }

  async put(
    endpoint: string,
    body = {},
    headers?: RawAxiosRequestHeaders | AxiosHeaders,
  ) {
    const response = await this.axiosInstance.put(endpoint, body, { headers });
    return response.data;
  }

  async destroy(
    endpoint: string,
    headers?: RawAxiosRequestHeaders | AxiosHeaders,
  ) {
    const response = await this.axiosInstance.delete(endpoint, { headers });
    return response.data;
  }
  async patch(
    endpoint: string,
    body = {},
    headers?: RawAxiosRequestHeaders | AxiosHeaders,
  ) {
    const response = await this.axiosInstance.patch(endpoint, body, {
      headers,
    });
    return response.data;
  }
}
