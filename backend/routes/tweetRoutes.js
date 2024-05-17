// backend/routes/tweetRoutes.js
const express = require("express");
const {
  getTweets,
  createTweet,
  deleteTweet,
} = require("../controllers/tweetController");

const router = express.Router();

router.get("/", getTweets);
router.post("/", createTweet);
router.delete("/:id", deleteTweet);

module.exports = router;
