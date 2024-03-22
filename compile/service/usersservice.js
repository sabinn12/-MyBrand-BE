"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const bcrypt = __importStar(require("bcrypt"));
const users_1 = __importDefault(require("../models/users"));
const joi_validation_1 = __importDefault(require("../jwt/joi.validation"));
const users_register = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = joi_validation_1.default.validateUsersData(req.body);
        const { username, email, password } = req.body;
        const registerd_user = yield users_1.default.findOne({ $or: [{ username: username }, { email: email }, { password: password }] });
        if (registerd_user) {
            return false;
        }
        else if (valid.error) {
            return false;
        }
        else {
            yield bcrypt.hash(password, 10).then((hash) => {
                const users = new users_1.default({
                    username: username,
                    email: email,
                    password: hash
                });
                users.save();
                return users;
            });
        }
    }
    catch (err) {
        throw new Error(err.message);
    }
});
const userLogin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = joi_validation_1.default.validateUsersData(req.body);
        const { email } = req.body;
        const user = users_1.default.findOne({ email: email });
        if (!user) {
            return false;
        }
        else {
            return user;
        }
    }
    catch (err) {
        throw new Error(err.message);
    }
});
//Retriving all users
const retrieve = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield users_1.default.find();
    }
    catch (error) {
        throw new Error(error.message);
    }
});
const gettingLoggedInUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loggedIn = yield users_1.default.find();
        return loggedIn;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.default = {
    users_register,
    userLogin,
    gettingLoggedInUser,
    retrieve
};
