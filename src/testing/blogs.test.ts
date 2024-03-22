import jsonwebtoken from 'jsonwebtoken'
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
   describe("Get all blogs",()=>{
    it("return status 200 passed",async() =>{
        const response: Response = await request.get("/api/v1/blogs");
        expect(response.status).toBe(200);
    })
   })
   
   describe("Get single blog",()=>{
    it("return status code 200 passed to get a single blog",async() =>{
      const response: Response = await request.get("/api/v1/blogs/65fd4372a571556c86231f50");
      expect(response.status).toBe(200);
    })
  })

    let token:any;
  describe('Log in',() =>{
    it('Must log in ',async() =>{
      const loggedInUser = {
        email:"sabin12@gmail.com",
        password:"1234567",
      };
      const response:Response = await request.post("/api/v1/brand/users/login")
      .send(loggedInUser);
      expect(response.status).toBe(200);
      token = response.body.token;
    })
   })
   describe("/api/v1/brand/querries",() =>{
    it('return status 200 data retrieved',async()=>{
      const res:Response = await request.get("/api/v1/brand/querries")
      .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200)
    })
    it('Must return 401 when no token provided',async() => {
      const res:Response = await request.get("/api/v1/brand/querries")
      expect(res.status).toBe(401)
    })
  })

  describe("/api/v1/brand/querries",() =>{
    it('should retrun 200',async()=>{
      const res:Response = await request.get("/api/v1/brand/querries")
      .set('Authorization', `Bearer ${token}`);
      expect(res.status).toBe(200)

    })
  })

