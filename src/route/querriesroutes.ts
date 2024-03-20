import express from "express";
import Jwt from "../middleware/auth";
import querriesController from "../controller/querriescontroller";

const querriesRoutes = express.Router();

querriesRoutes.post("/querries",querriesController.createQuerries);

querriesRoutes.get("/querries",Jwt.tokenValidation,querriesController.getAllQuerries);

querriesRoutes.delete("/querries/:id",Jwt.tokenValidation,querriesController.removeQuerries);



export default querriesRoutes;
