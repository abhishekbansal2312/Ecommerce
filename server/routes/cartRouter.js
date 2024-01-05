// server/routes/cartRoutes.js
const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const { verifyToken } = require("../utils/verifyUser");

// Get the user's cart
router.get("/", verifyToken, cartController.getCart);

// Add a product to the cart
router.post("/add", verifyToken, cartController.addToCart);

// Update the quantity of a product in the cart
router.post("/updateQuantity", verifyToken, cartController.updateQuantity);

// Remove a product from the cart
router.delete("/remove/:productId", verifyToken, cartController.removeFromCart);

module.exports = router;
