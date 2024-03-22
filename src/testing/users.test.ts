import mongoose from "mongoose";
import dotenv from "dotenv";
import { Response, SuperTest, Test } from 'supertest';
import app from "../app";
import User from "../models/users";
dotenv.config()
const request: SuperTest<Test> = require('supertest')(app);
beforeAll(async() => {
  User.deleteMany()
    await mongoose.connect(`${process.env.MONGODB_URL}`);
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

describe("/api/v1/brand/users",() =>{
    it("Return status code 201 to indicate that new user were registered",async() => {
        const users = {
            username:"hellooo",
            email:"hello@gmail.com",
            password:"098768"
        }
        const res:Response = await request.post("/api/v1/brand/users/")
        .send(users);
        expect(res.status).toBe(201);
    })
})
