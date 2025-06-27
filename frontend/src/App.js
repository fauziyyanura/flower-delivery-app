import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import UtilityNav from "./components/UtilityNav";
import FreshFlowersPage from "./components/FreshFlowersPage";
import DriedFlowersPage from "./components/DriedFlowerPage";
import LivePlantsPage from "./components/LivePlantPage";
import AromaCandlePage from "./components/AromaCandlePage";
import ProductPage from './pages/ProductPage';
import Footer from "./components/Footer";
import FreshenersPage from "./components/FreshenersPage";


function App() {
  return (
    <>
      <UtilityNav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other pages */}
        <Route path="/shop/fresh-flowers" element={<FreshFlowersPage />} />
        <Route path="/shop/dried-flowers" element={<DriedFlowersPage />} />
        <Route path="/shop/live-plants" element={<LivePlantsPage />}  />
        <Route path="/shop/aroma-candles" element={<AromaCandlePage />} />
        <Route path="/shop/fresheners"  element={<FreshenersPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;