"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("../app"));
const users_1 = __importDefault(require("../models/users"));
dotenv_1.default.config();
const request = require('supertest')(app_1.default);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield users_1.default.deleteMany();
        yield mongoose_1.default.connect(`${process.env.MONGODB_URL}`);
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connection.close();
    }
    catch (error) {
        console.error("Error closing MongoDB connection:", error);
    }
}));
describe("/api/v1/brand/users", () => {
    it("should return status code 201 to indicate that a new user were registered", () => __awaiter(void 0, void 0, void 0, function* () {
        const users = {
            username: "why",
            email: "why@gmail.com",
            password: "098768"
        };
        try {
            const res = yield request.post("/api/v1/brand/users/").send(users);
            expect(res.status).toBe(201);
        }
        catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    }));
});
