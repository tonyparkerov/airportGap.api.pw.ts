import { test, expect } from "API/fixtures/api.fixture";
import { ErrorResponseSchema } from "API/schemas/error.schema";

test.use({ extraHTTPHeaders: {} });

test("FAVORITES", async ({ api }) => {
  const response = await api.favorites.getAll();
  const body = await response.json();

  const validation = ErrorResponseSchema.safeParse(body);

  expect(validation.success).toBeTruthy();
});
