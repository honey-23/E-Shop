import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllProduct from './Components/AllProduct/AllProduct';
import Login from './Components/Login/Login';
import Cart from './Pages/Cart/Cart';
import RegisterPage from './Components/Login/RegisterPage';
import { Toaster } from 'react-hot-toast';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import { CartProvider } from './Components/Context/CartContext';
import Homepage from './Pages/Home/Homepage';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<AllProduct  />} />
          <Route path="/cart" element={<Cart  />} />
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
