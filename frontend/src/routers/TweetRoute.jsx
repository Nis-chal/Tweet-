import { Routes, Route } from "react-router-dom";
import TweetListScreen from "../screen/Tweet/TweetListScreen";

const TweetRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<TweetListScreen />} />
    </Routes>
  );
};

export default TweetRoute;
