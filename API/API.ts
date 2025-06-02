import { APIRequestContext } from "@playwright/test";
import { AirportsController } from "./controllers/AirportsController";
import { FavoritesController } from "./controllers/FavoritesController";

export class API {
  private request: APIRequestContext;
  airports: AirportsController;
  favorites: FavoritesController;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.airports = new AirportsController(this.request);
    this.favorites = new FavoritesController(this.request);
  }
}
