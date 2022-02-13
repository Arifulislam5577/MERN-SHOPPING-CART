import express from "express";
import {
  createOrder,
  getOrder,
  updateOrder,
} from "../controllers/orderControllers.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.route("/").post(verifyToken, createOrder);
router.route("/:id").get(verifyToken, getOrder).patch(verifyToken, updateOrder);

export default router;
