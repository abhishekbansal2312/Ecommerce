const express = require("express");
const productController = require("../controllers/productController");
const { verifyToken } = require("../utils/verifyUser");
const router = express.Router();

// Create a new product
router.post("/", productController.createProduct);

// Get all products
router.get("/", verifyToken, productController.getAllProducts);

// Get a specific product by ID
router.get("/:id", productController.getProductById);

// Update a product by ID
router.put("/:id", productController.updateProduct);

// Delete a product by ID
router.delete("/:id", productController.deleteProduct);

module.exports = router;
