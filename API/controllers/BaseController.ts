import { APIRequestContext } from "@playwright/test";

export abstract class BaseController {
  protected request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }
}
