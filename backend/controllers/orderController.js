const Order = require("../models/orderModel"); // Import your Order model

// Controller function to save order
const saveOrder = async (req, res) => {
  try {
    const { items, totalCost } = req.body; // Assuming you're receiving items and totalCost in the request body
    console.log(items);
    // Create a new instance of the Order model
    const newOrder = new Order({
      items: items.map((item) => ({
        menuItem: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalCost,
    });

    // Save the order to the database
    await newOrder.save();

    res.status(201).json({ message: "Order saved successfully" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("items.menuItem")
      .sort({ createdAt: -1 });
    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error finding orders:", error);
    throw new Error("Error finding orders");
  }
};

module.exports = {
  saveOrder,
  getOrders,
};
