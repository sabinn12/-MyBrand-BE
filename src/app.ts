
import express  from "express";
import routes from "./route/index";
import { db } from './configuration/config';

const app = express();
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use("/api/v1",routes);
app.use(cookieParser());

db.once('open', () => {
    app.listen(5000,() =>{console.log("Server has started!")});
});



