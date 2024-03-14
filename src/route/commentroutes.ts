import express,{Request,Response} from "express";

const commentRoutes = express.Router();
commentRoutes.get("/",(req:Request,res:Response) => {
res.send("new comment data created");
})

export default commentRoutes;