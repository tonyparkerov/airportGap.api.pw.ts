import { BaseController } from "./BaseController";

export class FavoritesController extends BaseController {
  async getAll() {
    return await this.request.get("/api/favorites");
  }
}
