import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
    title: {type:String,required:true},
    image: {type:String,required:true},
    content: {type:String,required:true},
    CreatedAt:{type:Date,default:Date.now()},
    UpdatedAt:{type:Date,default:Date.now()}

});

export default mongoose.model("blog",blogSchema);