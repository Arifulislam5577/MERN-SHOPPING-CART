import express from "express";
import { createOrder, getOrder } from "../controllers/orderControllers.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.route("/").post(verifyToken, createOrder);
router.route("/:id").get(verifyToken, getOrder);

export default router;
