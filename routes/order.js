const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// API untuk membuat pesanan baru
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: "Pesanan berhasil disimpan!", order: newOrder });
  } catch (error) {
    console.error("MongoDB Error:", error);
    res.status(500).json({ message: "Gagal menyimpan pesanan", error });
  }
});

module.exports = router;
