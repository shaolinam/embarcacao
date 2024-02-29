export default interface HttpClient {
  get(url: string, config?: any): Promise<any>;
  post(url: string, body: any, config?: any): Promise<any>;
  put(url: string, body: any): Promise<any>;
  delete(url: string): Promise<any>;
}
