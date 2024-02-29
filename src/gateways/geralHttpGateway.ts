import HttpClient from "../infra/HttpClient";
import GeralGateway from "./geralGateway";

export default class GeralHttpGateway implements GeralGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getGeral(): Promise<any> {
    const url = "";
    const res = await this.httpClient.get(url);
    return res;
  }
}
