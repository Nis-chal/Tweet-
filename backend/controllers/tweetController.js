const Tweet = require("../models/tweetModel");

const getTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching tweets" });
  }
};

const createTweet = async (req, res) => {
  try {
    const newTweet = new Tweet(req.body);
    await newTweet.save();
    res.json(newTweet);
  } catch (error) {
    res.status(500).json({ message: "Error creating tweet" });
  }
};

const deleteTweet = async (req, res) => {
  try {
    await Tweet.findByIdAndDelete(req.params.id);
    res.json({ message: "Tweet deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting tweet" });
  }
};

module.exports = {
  getTweets,
  createTweet,
  deleteTweet,
};
