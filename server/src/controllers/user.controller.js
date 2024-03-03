import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

// Generate access token for user
const generateAccess = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken };
  } catch (error) {
    throw new ApiError(500, "Something went wrong while generating access token");
  }
};

// Register a new user
const userRegister = async (req, res) => {
  try {
    const { email, username, password, fullName } = req.body;

    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All fields are required , Some of them are empty");
    }

    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      throw new ApiError(409, "User, You already exist !! Why again ?");
    }

    const user = await User.create({
      username: username,
      fullName,
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering the user");
    }

    res.status(201).json(new ApiResponse(200, createdUser, "User registered Successfully"));
  } catch (error) {
    console.log("error : ", error);
    throw new ApiError(500, "Something went Wrong in Server");
  }
};

export { userRegister };
