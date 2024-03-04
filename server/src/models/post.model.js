import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    lowercase: true,
  },
  body: {
    type: String,
    required: true,
  },
});

export const Post = mongoose.model("Post", postSchema);
