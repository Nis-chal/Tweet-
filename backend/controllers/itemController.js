const fs = require("fs");
const path = require("path");

const getAllItems = async (req, res) => {
  const menuItemsPath = path.join(__dirname, "data", "menuItems.json");
  fs.readFile(menuItemsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading menuItems.json:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
};

module.exports = {
  getAllItems,
};
