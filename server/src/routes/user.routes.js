import { Router } from "express";
import { userRegister, userSignIn } from "../controllers/user.controller.js";

const router = Router();

router.route("/signup").post(userRegister);
router.route("/signin").post(userSignIn);

export default router;
