import mongoose from "mongoose";
const commentsSchema = new mongoose.Schema({
    visitor:{type:String,required:true},
    comment:{type:String,required:true},
    blogID:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'blog'
      } 
})
export default mongoose.model("comment",commentsSchema);