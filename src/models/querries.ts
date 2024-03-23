import mongoose from "mongoose";
const querriesSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Message:{type:String,required:true}
})
export default mongoose.model("querrie",querriesSchema);