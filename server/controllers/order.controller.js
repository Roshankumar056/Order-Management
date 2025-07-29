const Order = require("../models/order.model");
const { getIO } = require("../config/socket");

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    getIO().emit("order_update", order);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    getIO().emit("order_update", order);
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
