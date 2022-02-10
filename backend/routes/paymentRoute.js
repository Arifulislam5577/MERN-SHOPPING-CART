import express from "express";
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

import { verifyToken } from "../utils/verifyToken.js";

router.post("/payment", verifyToken, (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (err, response) => {
      if (err) {
        res.status(404).json({ message: err.message });
      } else {
        res.status(200).json(response);
      }
    }
  );
});

export default router;
