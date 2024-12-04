import React, { useState, useEffect } from 'react';
import './../../Customstylesheet/Navbar.css';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'; // Import required Firebase methods
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
 const navigate = useNavigate(); // Initialize useNavigate hook
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication status

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // User is logged out
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const handlelogout = () => {
    const auth = getAuth(); // Get the auth instance
    signOut(auth)
      .then(() => {
        toast.success('Logout Successfully');
        navigate('/login'); // Navigate to the home page after logout
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar py-2 px-5 shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand logo text-uppercase fw-bold" href="/">
          <i className="bi bi-bag-check-fill me-2"></i> E-Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">All Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="/cart">
                <i className="bi bi-cart4 me-2"></i>Cart
              </a>
            </li>
            {/* Conditional rendering for Login/Logout button */}
            <li className="nav-item">
              {isAuthenticated ? (
                <button className="btn btn-outline-light btn-sm custom-btn" onClick={handlelogout}>
                  Logout
                </button>
              ) : (
                <a className="btn btn-outline-light btn-sm custom-btn" href="/login">
                  Login
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
