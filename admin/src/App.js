import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Flowers from './components/Flowers';
import AddFlowers from './components/AddFlowers';
import './App.css';


function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Flowers />} /> {/* Flowers is the landing page */}
        <Route path="/add-flowers" element={<AddFlowers />} />
      </Routes>
    </Router>
  );
}

export default App;

