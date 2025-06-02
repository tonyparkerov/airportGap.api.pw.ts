import { APIRequestContext } from "@playwright/test";
import { AirportsController } from "./controllers/AirportsController";
import { FavoritesController } from "./controllers/FavoritesController";

export class API {
  private static instance: API;
  private request: APIRequestContext;
  airports: AirportsController;
  favorites: FavoritesController;

  private constructor(request: APIRequestContext) {
    this.request = request;
    this.airports = new AirportsController(this.request);
    this.favorites = new FavoritesController(this.request);
  }

  static getInstance(request: APIRequestContext) {
    if (!API.instance) {
      API.instance = new API(request);
    }
    return API.instance;
  }
}
