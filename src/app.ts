
import express  from "express";
import routes from "./route/index";
import { db } from './configuration/config';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1",routes);


// if(require.main === module){
//     db.once('open', () => {

//         app.listen(5000,() =>{console.log("Server has started!")});
//     });
// }


export default app;

