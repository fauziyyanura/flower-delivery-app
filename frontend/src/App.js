import { Routes, Route } from "react-router-dom"; 
import './App.css';
import Home from "./pages/Home";
import UtilityNav from "./components/UtilityNav";
import FreshFlowersPage from "./components/FreshFlowersPage";
import DriedFlowersPage from "./components/DriedFlowerPage";
import LivePlantsPage from "./components/LivePlantPage";
import AromaCandlePage from "./components/AromaCandlePage";
import SignUp from "./components/SignUp";
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage'
import SignIn from "./components/SignIn";
import Cart from "./components/cart";
import Footer from "./components/Footer";
import FreshenersPage from "./components/FreshenersPage";
import SuccessMessage from "./components/SuccessMessage";
import CancelMessage from "./components/CancelMessage";


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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<SuccessMessage />} />
        <Route path="/cancel" element={<CancelMessage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;