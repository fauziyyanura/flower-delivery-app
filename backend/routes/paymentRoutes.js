const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // from .env file

router.post("/create-checkout-session", async (req, res) => {
const { cartItems } = req.body;

try {
    const line_items = cartItems.map(item => ({
        price_data: {
        currency: "usd",
        product_data: {
            name: item.name,
            images: [item.imageUrl],
        },
        unit_amount: item.price * 100, // Stripe uses cents
    },
    quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items,
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
} catch (error) {
    console.error("Stripe error:", error.message);
    res.status(500).json({ error: "Payment session failed" });
}
});

module.exports = router;
