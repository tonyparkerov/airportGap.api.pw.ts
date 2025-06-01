import { BaseController } from "./BaseController";

export class AirportsController extends BaseController {
  async getAll() {
    const response = await this.request.get("/api/airports");
    return response;
  }

  async getById(id: string) {
    const response = await this.request.get(`/api/airports/${id}`);
    return response;
  }
}
