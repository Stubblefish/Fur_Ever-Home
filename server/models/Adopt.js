const mongoose = require("mongoose");

const { Schema } = mongoose;

const AdoptSchema = new Schema({
  AdoptDate: {
    type: Date,
    default: Date.new,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
