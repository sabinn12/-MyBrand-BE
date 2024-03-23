import mongoose from "mongoose";
import dotenv from "dotenv";
import { Response, SuperTest, Test } from 'supertest';
import app from "../app";
dotenv.config()
const request: SuperTest<Test> = require('supertest')(app);
beforeAll(async() => {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

describe("Creating new queries",() => {
  const query = {
    Name:"mr",
    Email:"irakiza@gmail.com",
    Message: "hi irakiza"
  }
  it("Return status code 201 to indicate that new  was query created",async() =>{
    const response: Response = await request.post("/api/v1/brand/querries")
    .send(query);
    expect(response.status).toBe(201);
  })
}) 
  