const TweetForm = ({ handleNewTweet, newTweet, setNewTweet }) => {
  return (
    <div className="col-md-6">
      <form onSubmit={handleNewTweet}>
        <div className="form-group">
          <label>New Tweet</label>
          <input
            type="text"
            className="form-control"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetForm;
