import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screen/Home/HomeScreen";
import NavBar from "./components/navbar";
import Cart from "./screen/Cart/Cart";
import PastOrder from "./screen/Order/Order";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<PastOrder />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
