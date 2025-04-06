const request = require("supertest");
const app = require("./server");

describe("POST /login", () => {
  test("return a status code of 200 if the username and password is correct", async () => {
    const response = await request(app).post("/login").send({
      username: "admin",
      password: "12345",
    });
    expect(response.statusCode).toBe(200);
  });

  test("return a status code of 401 if the username and password is incorrect", async () => {
    const response = await request(app).post("/login").send({
      username: "admin",
      password: "123425",
    });
    expect(response.statusCode).toBe(401);
  });
});
