
import express  from "express";
import routes from "./route/index";
import { db } from './configuration/config';

const app = express();
app.use(express.json());
app.use("/api/v1",routes);

db.once('open', () => {
    app.listen(5000,() =>{console.log("Server has started!")});
});



