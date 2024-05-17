import { useEffect, useState } from "react";
import { getTweets, createTweet, deleteTweet } from "../../api/tweetApi";
import TweetForm from "./tweetComponents/TweetForm";

const TweetListScreen = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    try {
      const response = await getTweets();
      setTweets(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleNewTweet = async (e) => {
    e.preventDefault();
    try {
      const response = await createTweet({ content: newTweet });
      const createdTweet = response.data;
      setTweets((prevTweets) => [createdTweet, ...prevTweets]);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleDeleteTweet = async (id) => {
    try {
      await deleteTweet(id);
      setTweets((prevTweets) => prevTweets.filter((tweet) => tweet._id !== id));
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className="row my-4">
        <div className="col">
          <h2>Tweet Counter: {tweets.length}</h2>
        </div>
      </div>
      <div className="row">
        <TweetForm
          handleNewTweet={handleNewTweet}
          newTweet={newTweet}
          setNewTweet={setNewTweet}
        />
      </div>
      <div className="row mt-4">
        <div className="col">
          <ul className="list-group">
            {tweets.map((tweet) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={tweet._id}
              >
                {tweet.content}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteTweet(tweet._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TweetListScreen;
