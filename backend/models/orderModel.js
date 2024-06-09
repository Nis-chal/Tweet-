const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        menuItem: { type: String },
        name:{type:String},
        quantity: { type: Number, default: 0 },
        price: { type: Number, default: 0 },
      },
    ],
    totalCost: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
