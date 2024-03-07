import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

//! Generate access token for user
const generateAccess = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();

    return { accessToken };
  } catch (error) {
    // console.log("error from generateAccess: ", error);
    throw new ApiError(500, "Something went wrong while generating access token");
  }
};

//! Register a new user
const userRegister = async (req, res) => {
  try {
    const { email, username, password, fullName } = req.body;

    if ([username, email, fullName, password].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All fields are required , Some of them are empty");
    }

    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      return res
        .status(404)
        .json(new ApiResponse(409, "User, You already exist !! Why again ?", existedUser));
    }

    const user = await User.create({
      username,
      email,
      fullName,
      password,
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering the user");
    }

    res
      .status(201)
      .json(new ApiResponse(200, "User registered Successfully", { data: "All Green !!" }));
  } catch (error) {
    // console.log("error from register: ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

//! Sign In a user
const userSignIn = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(400, "Email and Password are required");
    }

    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      throw new ApiError(404, "User does not exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid user credentials");
    }

    const { accessToken } = await generateAccess(user._id);

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .json(new ApiResponse(200, "User Logged In successfully", { loggedInUser, accessToken }));
  } catch (error) {
    // console.log("error from Sign in : ", error);
    res.status(500).json({ error: "Something went Wrong in Server" });
  }
};

export { userRegister, userSignIn };
