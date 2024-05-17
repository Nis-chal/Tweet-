const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema(
  {
    content: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tweet", TweetSchema);
