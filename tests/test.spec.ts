import { test, expect } from "API/fixtures/api.fixture";

test.use({ extraHTTPHeaders: {} });

test("Get airport by id", async ({ api }) => {
  let response = await api.airports.getAll();
  let body = await response.json();
  const airportId = body.data[0].id;

  response = await api.airports.getById(airportId);
  body = await response.json();
  console.log(body);
  expect(response.status()).toBe(200);
  expect(body.data.id).toBe(airportId);
});

test("FAVORITES", async ({ api }) => {
  const response = await api.favorites.getAll();
  const body = await response.json();
  console.log(body);
  expect(response.status()).toBe(200);
});
