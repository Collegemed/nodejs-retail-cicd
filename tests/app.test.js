const request = require("supertest");
const app = require("../src/index");

describe("Retail API", () => {
  it("Health check endpoint", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("OK");
  });

  it("Products endpoint", async () => {
    const res = await request(app).get("/products");
    expect(res.body.length).toBeGreaterThan(0);
  });
});
