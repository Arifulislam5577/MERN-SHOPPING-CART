import express from "express";
import { updateUserInfo } from "../controllers/UserControllers.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

router.route("/:id").patch(verifyToken, updateUserInfo);

export default router;
