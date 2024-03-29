import express from 'express';
import Jwt from "../middleware/auth";
import usersController from '../controller/userscontroller';

const usersRoutes = express.Router();
usersRoutes.post("/users",usersController.register);
usersRoutes.post("/users/login",usersController.login)

usersRoutes.get("/users",Jwt.tokenValidation,usersController.allusers);

export default usersRoutes;