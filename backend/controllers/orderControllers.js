import ORDER from "../model/ORDER.js";
import asyncHandler from "express-async-handler";

export const createOrder = asyncHandler(async (req, res) => {
  const order = await ORDER.create({
    user: req.user._id,
    orderItems: req.body.orderItems,
    shippingAddress: req.body.shippingAddress,
    taxPrice: req.body.taxPrice,
    shippingPrice: req.body.shippingPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
  });

  if (order) {
    res.status(201).json(order);
  } else {
    res.status(400);
    throw new Error("Something wrong");
  }
});

export const getOrder = asyncHandler(async (req, res) => {
  const order = await ORDER.findById(req.params.id);
  if (order) {
    return res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("No Order found");
  }
});
