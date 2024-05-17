import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TweetRoute from "./routers/TweetRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<TweetRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
