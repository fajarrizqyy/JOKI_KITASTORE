const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
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
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
