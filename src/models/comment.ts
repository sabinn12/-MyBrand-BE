import mongoose from "mongoose";
const commentsSchema = new mongoose.Schema({
    Email:{type:String,required:true},
    Comment:{type:String,required:true},
    blogID:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'blog'
      } 
})
export default mongoose.model("comment",commentsSchema);