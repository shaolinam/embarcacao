import type HttpClient from "./HttpClient";
import { type AxiosInstance } from "axios";

export default class AxiosAdapter implements HttpClient {
  constructor(readonly axios: AxiosInstance) {}

  async get(url: string): Promise<any> {
    const response = await this.axios.get(url);
    return response.data;
  }

  async post(url: string, body: any): Promise<any> {
    const response = await this.axios.post(url, body);
    return response.data;
  }

  async put(url: string, body: any): Promise<any> {
    const response = await this.axios.put(url, body);
    return response.data;
  }

  async delete(url: string): Promise<any> {
    const response = await this.axios.delete(url);
    return response.data;
  }
}
