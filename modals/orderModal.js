const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    name: { type: String, require:true },
    email: { type: String, require:true },
    userid: { type: String, require:true },
    orderItems: [],
    orderAmount: { type: Number, require:true },
    shippingAddress: { type: Object },
    isDelivered: { type: Boolean, require:true, default: false },
    transactionId: { type: String, require:true },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("orders", orderSchema);
