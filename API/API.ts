import { APIRequestContext } from "@playwright/test";
import { AirportsController } from "./controllers/AirportsController";

export class API {
  private request: APIRequestContext;
  airports: AirportsController;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.airports = new AirportsController(this.request);
  }
}
