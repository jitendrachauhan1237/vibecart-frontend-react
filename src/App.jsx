import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import ShopCategory from "./pages/shopcategory";
import Product from "./pages/product";
import Cart from "./pages/cart";
import LoginSignup from "./pages/loginsignup";
import Footer from "./components/Footer/Footer";
import men_banner from "./components/Assets/men-banner.png";
import women_banner from "./components/Assets/women-banner.png";
import kid_banner from "./components/Assets/kids-banner.png";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Profile from "./components/Profile";
import ShopContextProvider from "./context/ShopContext";
import Card from "./components/Card";
import { AnimatePresence } from "framer-motion";
import ProceedToPay from "./components/ProcedToPay/ProceedToPay";
import Shipping from "./components/ProcedToPay/Shipping";


function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
      <AnimatePresence mode="wait">
        <Navbar />


        
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/card" element={<Card />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/proceedtopay" element={<ProceedToPay />} /> 
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
        <Footer />
        </AnimatePresence>

       

       
        <BottomNavbar />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
  