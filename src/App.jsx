import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ShopSerums from "./pages/ShopSerums";
import SkinConcerns from "./pages/SkinConcerns";
import SerumGuides from "./pages/SerumGuides";
import Blog from "./pages/Blog";

import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Navbar Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/shop-serums" element={<ShopSerums />} />
        <Route path="/skin-concerns" element={<SkinConcerns />} />
        <Route path="/serum-guides" element={<SerumGuides />} />
        <Route path="/blog" element={<Blog />} />

        {/* Other Pages */}
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
