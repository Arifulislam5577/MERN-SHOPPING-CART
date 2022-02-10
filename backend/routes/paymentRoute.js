import express from "express";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
      apiKey: process.env.STRIPE_SECRET_KEY,
    },
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.status(200).json(result);
      }
    }
  );
});

export default router;
