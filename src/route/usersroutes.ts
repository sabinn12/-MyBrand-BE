import express from 'express';
// import Jwt from "../jwt/jwt";
import usersController from '../controller/userscontroller';

const usersRoutes = express.Router();
usersRoutes.post("/users",usersController.register);
usersRoutes.post("/users/login",usersController.login)
usersRoutes.get("/users",usersController.userProfile);

export default usersRoutes;