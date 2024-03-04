import { Router } from "express";
import { insertPost } from "../controllers/post.controller.js";

const router = Router();

router.route("/insert").get(insertPost);

export default router;
