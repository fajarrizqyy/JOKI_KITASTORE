const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({ message: "✅ Pesanan berhasil disimpan!", order });
    } catch (error) {
        res.status(500).json({ message: "❌ Gagal menyimpan pesanan!", error });
    }
});

module.exports = router;
