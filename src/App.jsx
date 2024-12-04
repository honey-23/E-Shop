import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AllProduct from './Components/AllProduct/AllProduct';
import Login from './Components/Login/Login';
import Cart from './Pages/Cart/Cart';
import RegisterPage from './Components/Login/RegisterPage';
import { Toaster } from 'react-hot-toast';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import { CartProvider } from './Components/Context/CartContext';

const App = () => {
  const [cart, setCart] = useState([]);

  // Correct function to add to cart
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const productExists = cart.some(cartItem => cartItem.id === item.id);
    if (!productExists) {
      // Add product to the cart if not already added
      setCart([...cart, item]);
    } else {
      console.log('Product is already in the cart');
    }
  };

  return (
    <CartProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProduct addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
