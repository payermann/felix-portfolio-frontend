import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ecommerce from "./pages/Ecommerce";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/e-commerce" element={<Ecommerce />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
