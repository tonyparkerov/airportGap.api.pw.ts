import { BaseController } from "./BaseController";

export class AirportsController extends BaseController {
  private resource = "/api/airports";

  async getAll(page?: number) {
    const url = page ? `${this.resource}?page=${page}` : this.resource;
    return await this.request.get(url);
  }

  async getById(id: string) {
    return await this.request.get(`${this.resource}/${id}`);
  }

  async calculateDistanceBetween(airports?: {from?: string, to?: string}) {

  }
}
