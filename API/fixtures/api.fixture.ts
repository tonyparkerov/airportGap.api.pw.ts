import { test as base } from "@playwright/test";
import { API } from "API/API";

type MyFixtures = {
  api: API;
};

export const test = base.extend<MyFixtures>({
  api: async ({ request }, use) => {
    const api = API.getInstance(request);

    await use(api);
  },
});

export { expect } from "@playwright/test";
