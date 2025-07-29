const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  items: [{ productId: String, quantity: Number }],
  paymentCollected: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ["PLACED", "PICKED", "SHIPPED", "DELIVERED"],
    default: "PLACED",
  },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
