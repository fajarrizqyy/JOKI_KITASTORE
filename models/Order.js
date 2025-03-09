const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  nickname: String,
  email: String,
  heroRequest: String,
  password: String,
  rank: String,
  price: Number,
  quantity: Number,
  total: Number,
  paymentMethod: String,
  adminFee: Number,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
