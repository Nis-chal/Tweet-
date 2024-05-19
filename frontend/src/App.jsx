import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TweetRoute from "./routers/TweetRoute";
import TodoRoute from "./routers/TodoRoue";
import HomeScreen from "./screen/Home/HomeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/tweets/*" element={<TweetRoute />} />
        <Route path="/todos/*" element={<TodoRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
