// models/User.js
const mongoose = require('mongoose');

// Definisikan schema untuk data akun
const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  heroRequest: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Buat model berdasarkan schema
const User = mongoose.model('User', userSchema);

module.exports = User;
