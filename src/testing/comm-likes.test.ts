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
  describe("/api/v1/blogs/:id/comments",() => {
    try{
    it("Return status 200 to indicate that new comment added",async() => {
        const comments = {
            Name:"braaandon",
            Comment:"ndaq",
          };
        const res:Response =await request.post("/api/v1/blogs/65fd4372a571556c86231f50/comments")
        .send(comments)
        expect(res.status).toBe(201);
    })
        }catch(err:any){
            throw new Error(err.message);
        }
  });
describe("/api/v1/blogs/65fd4372a571556c86231f50/comments",() => {
    try{
        it("Should return status code 200 to indicate passed",async() => {
            const res:Response =await request.get("/api/v1/blogs/65fd4372a571556c86231f50/comments");
            expect(res.status).toBe(200)
        })   
    }catch(err:any){
        throw new Error(err.message);
    }
})
describe("/api/v1/blogs/65fd4372a571556c86231f50/likes",() => {
    try{
    it("Return statuus 200 to indicate that new like added",async() => {
        const likes = { like:true };
        const res:Response =await request.post("/api/v1/blogs/65fd4372a571556c86231f50/likes")
        .send(likes)
        expect({likes:true})
        expect(res.status).toBe(201);
    })
        }catch(err:any){
            throw new Error(err.message);
        }
  });
  describe("/api/v1/blogs/65fd4372a571556c86231f50/likes",() => {
    try{
        it("Should return status code 200 to indicate passed",async() => {
            const res:Response =await request.get("/api/v1/blogs/65fd4372a571556c86231f50/likes");
            expect(res.status).toBe(200)
        })   
    }catch(err:any){
        throw new Error(err.message);
    }
})
   