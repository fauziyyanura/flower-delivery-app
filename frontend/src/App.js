import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import UtilityNav from "./components/UtilityNav";

function App() {
  return (
    <>
      <UtilityNav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other pages */}
      </Routes>
    </>
  );
}

export default App;