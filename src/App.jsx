import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Subscription } from "./components/Subscribtion/Subscribtion";
import { Footer } from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import { Cartpage } from "./pages/Cartpage";
import { Homepage } from "./pages/Homepage";
import { ProductViewPage } from "./pages/ProductViewPage";
import { CategoryPage } from "./pages/CategoryPage";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Banner isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Header />
      <Routes>
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/product-view" element={<ProductViewPage />} />
        <Route path="/category" element={<CategoryPage/>} />
      </Routes>
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
