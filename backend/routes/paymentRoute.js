import express from "express";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
const stripe = new Stripe(
  "sk_test_51KR8gLImRiQekfxwt2huNRLr0ZZdvr3GcDvPOwnTeO3Um7o1ASjA3flTHSCd5qh0Q6HznOFdRk4MMLHYBwYI8gpN00sEVjZ1Ar"
);
const router = express.Router();

router.post("/payment", async (req, res) => {
  try {
    const { amount, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotencyKey = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: amount * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey,
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
