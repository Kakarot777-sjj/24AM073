import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  // useEffect --- watch cart changes
  useEffect(() => {
    console.log("Cart Updated:", cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
App.jsx