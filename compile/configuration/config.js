"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const MONGODB_URL = process.env.MONGODB_URL;
if (!MONGODB_URL) {
    console.error('Please define the MONGODB_URL environment variable');
    process.exit(1);
}
mongoose_1.default.set("strictQuery", false);
mongoose_1.default.connect(MONGODB_URL)
    .then(() => {
    console.log('connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});
exports.db = mongoose_1.default.connection;
