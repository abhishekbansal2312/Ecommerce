const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  avatar: {
    type: String,
    default: "",
  },
  // You can add more fields as per your requirements (e.g., image URL, category, etc.)
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
