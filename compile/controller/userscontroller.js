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
const usersservice_1 = __importDefault(require("../service/usersservice"));
const joi_validation_1 = __importDefault(require("../jwt/joi.validation"));
const jwt_1 = __importDefault(require("../jwt/jwt"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const valid = joi_validation_1.default.validateUsersData(req.body);
        const users = yield usersservice_1.default.users_register(req);
        if (valid.error) {
            res.status(400).json({
                status: 400,
                message: (_a = valid.error) === null || _a === void 0 ? void 0 : _a.message
            });
        }
        else {
            res.status(201).json({
                status: 201,
                message: 'User registtration complete !'
            });
        }
    }
    catch (error) {
        res.send(error.message);
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valid = joi_validation_1.default.validateUsersData(req.body);
        const { password } = req.body;
        const user = yield usersservice_1.default.userLogin(req);
        if (!user) {
            res.status(404).json({
                status: 404,
                message: 'User Not Found !'
            });
        }
        else {
            bcrypt_1.default.compare(password, user.password)
                .then((match) => {
                if (!match) {
                    res.status(400).json({
                        status: 400,
                        message: 'Bad combination of email and password!'
                    });
                }
                else {
                    const accessToken = jwt_1.default.createToken(user);
                    res.cookie("access-token", accessToken, {
                        maxAge: 60 * 60 * 24 * 31 * 1000,
                        httpOnly: true,
                    });
                    res.status(200).json({
                        status: 201,
                        token: accessToken
                    });
                }
            });
        }
    }
    catch (err) {
        throw new Error(err.message);
    }
});
const userProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = usersservice_1.default.gettingLoggedInUser();
    if (!profile) {
        res.status(400).json({
            status: 400,
            message: 'User not found'
        });
    }
    else {
        res.status(200).json({
            status: 200,
            message: profile
        });
    }
});
exports.default = {
    register,
    login,
    userProfile
};
