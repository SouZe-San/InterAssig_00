import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Post } from "../models/post.model.js";
import { posts } from "../../100posts.js";
// insert a new post

const insertPost = async (req, res) => {
  try {
    for (const post of posts) {
      const newPost = await Post.create(post);
      const dbPost = await Post.findById(newPost._id).select("-body -username");
      if (!dbPost) {
        console.log("Error while inserting the post");
        throw new ApiError(500, "Something went wrong while inserting the post");
      }
    }

    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    console.log("error from insertPost: ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

export { insertPost };
