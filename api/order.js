import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// ✅ **[POST] Buat Order Baru**
router.post("/", async (req, res) => {
  try {
    const { nickname, email, heroRequest, password, rank, price, quantity, total, paymentMethod, adminFee } = req.body;

    if (!nickname || !email || !rank || !price || !quantity || !total || !paymentMethod) {
      return res.status(400).json({ message: "❌ Semua field wajib diisi!" });
    }

    const newOrder = new Order({
      nickname,
      email,
      heroRequest,
      password,
      rank,
      price,
      quantity,
      total,
      paymentMethod,
      adminFee,
    });

    await newOrder.save();
    res.status(201).json({ message: "✅ Order berhasil dibuat!", order: newOrder });
  } catch (error) {
    console.error("❌ Error saving order:", error);
    res.status(500).json({ message: "❌ Gagal menyimpan order", error });
  }
});

// ✅ **[GET] Ambil Semua Order**
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "❌ Gagal mengambil data", error });
  }
});

// ✅ **[GET] Ambil Order berdasarkan ID**
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "❌ Order tidak ditemukan!" });

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "❌ Gagal mengambil data", error });
  }
});

// ✅ **[DELETE] Hapus Order**
router.delete("/:id", async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ message: "❌ Order tidak ditemukan!" });

    res.json({ message: "✅ Order berhasil dihapus!" });
  } catch (error) {
    res.status(500).json({ message: "❌ Gagal menghapus order", error });
  }
});

export default router;
