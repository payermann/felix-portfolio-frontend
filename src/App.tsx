import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Layout from "./sections/Layout";
import About from "./pages/About";
import Exemple from "./pages/Exemple";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/exemple" element={<Exemple />} />
      </Routes>
    </Router>
  );
}

export default App;
