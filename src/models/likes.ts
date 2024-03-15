import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    like: { type: Boolean, default: false },
    blogID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog'
    }
});

export default mongoose.model("like", likeSchema);
