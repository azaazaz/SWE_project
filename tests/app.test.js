const request = require("supertest");
const app = require("../src/index");
describe("GET /", () => {
test(" should respond with a 200 status code and Hello, World!", async () => {
// Send a GET request to the ’/’ route using supertest
const response = await request(app).get("/");
// Assert that the HTTP status code is 200 (OK)
expect(response.statusCode).toBe(200);
// Assert that the response body is the expected string
expect(response.text).toEqual("Hello, World!");
});
});