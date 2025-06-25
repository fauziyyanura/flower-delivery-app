import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import UtilityNav from "./components/UtilityNav";
import FreshFlowersPage from "./components/FreshFlowersPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <UtilityNav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other pages */}
        <Route path="/shop/fresh-flowers" element={<FreshFlowersPage />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;