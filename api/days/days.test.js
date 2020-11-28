const request = require("supertest");
const StartServer = require("../server");
const mongoose = require("mongoose");

const testServer = new StartServer();
testServer.initSevices();

const app = testServer.getServer();

// тесты актуальны без авторизации
describe("DELETE /days", () => {
  beforeAll(done => {
    done()
  });
  afterAll(done => {
    mongoose.connection.close()
    done()
  });
  let token;
  beforeEach (async () => {
    const response = await request(app)
      .put("/users/login")
      .send({
        login:"mikiteek@gmail.com",
        password: "111111"
      })
      .set("Accept", "application/json")
      .expect(200)
    token = response.body.token;

    await request(app)
      .post("/days")
      .send({
        productId:"5d51694802b2373622ff5534",
        weight: 550,
        date: "2020-11-27"
      })
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + token)
      .expect(201)
  });

  it ('should return 200', async () => {
    await request(app)
      .delete("/days")
      .send({
        "productId":"5d51694802b2373622ff5534",
        "date": "2020-11-27",
      })
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + token)
      .expect(200)
  });
});