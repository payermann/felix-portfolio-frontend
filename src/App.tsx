import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./sections/Layout";
import About from "./pages/About";
import Exemple from "./pages/Exemple";
import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/exemple" element={<Exemple />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
