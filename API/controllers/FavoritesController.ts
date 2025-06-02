import { BaseController } from "./BaseController";

export class FavoritesController extends BaseController {
  private resource = "/api/favorites";
  
  async getAll() {
    return await this.request.get(this.resource);
  }
}
