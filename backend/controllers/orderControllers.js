import ORDER from "../model/ORDER.js";
import asyncHandler from "express-async-handler";

export const createOrder = asyncHandler(async (req, res) => {
  const order = ORDER.create({});
});
