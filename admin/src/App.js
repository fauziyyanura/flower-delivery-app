import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Flowers from "./components/Flowers";
import AddFlowers from "./components/AddFlowers";
import NavBar from "./components/NavBar"; // ✅ bring in your nav
import "./App.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="admin-panel">
      <NavBar /> {/* renders on every route */}
      <Routes>
        <Route path="/" element={<Flowers />} />
        <Route path="/add-flowers" element={<AddFlowers />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
