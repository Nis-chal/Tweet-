const express = require("express");
const router = express.Router();
const {
  getAllItems,

} = require("../controllers/itemController");

// Get all items , add new item
router.route("/").get(getAllItems);

module.exports = router;
