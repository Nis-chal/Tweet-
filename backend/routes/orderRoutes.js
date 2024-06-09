const express = require("express");
const router = express.Router();

const { saveOrder, getOrders } = require("../controllers/orderController");

// Get all items , add new item
router.route("/").get(getOrders).post(saveOrder);

module.exports = router;
