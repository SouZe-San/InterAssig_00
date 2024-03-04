import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Post } from "../models/post.model.js";
// insert a new post
let skipCount = 0;
const getPosts = async (_req, res) => {
  try {
    // Use Mongoose to find the next 10 posts based on skipCount
    const posts = await Post.find().skip(skipCount).limit(10);

    if (posts.length === 0) {
      // If no more data, send an empty message
      return res.status(404).json(new ApiResponse(409, "No more posts available", {}));
    } else {
      // Increment skipCount for the next request
      skipCount += 10;

      // Send the posts as a response
      res.status(201).json(new ApiResponse(200, "10 Post Send Successfully Left", posts));
    }
  } catch (error) {
    console.log("error from getPosts: ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

export { getPosts };
