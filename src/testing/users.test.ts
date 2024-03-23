import mongoose from "mongoose";
import dotenv from "dotenv";
import { Response, SuperTest, Test } from 'supertest';
import app from "../app";
import User from "../models/users";
dotenv.config();

const request: SuperTest<Test> = require('supertest')(app);

beforeAll(async () => {
  try {
    await User.deleteMany();
    await mongoose.connect(`${process.env.MONGODB_URL}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }
});

afterAll(async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }
});

describe("/api/v1/brand/users", () => {
  it("should return status code 201 to indicate that a new user was registered", async () => {
    const users = {
      username: "why",
      email: "why@gmail.com",
      password: "098768"
    };

    try {
      const res: Response = await request.post("/api/v1/brand/users/").send(users);
      expect(res.status).toBe(201);
    } catch (error) {
      console.error("Error registering user:", error);
      throw error; 
    }
  });
});
