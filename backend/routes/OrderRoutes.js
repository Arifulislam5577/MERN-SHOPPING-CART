import express from "express";
import {
  createOrder,
  getOrder,
  getUserOrder,
  updateOrder,
} from "../controllers/orderControllers.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.route("/").post(verifyToken, createOrder);
router.route("/").get(verifyToken, getUserOrder);
router.route("/:id").get(verifyToken, getOrder).patch(verifyToken, updateOrder);

export default router;
