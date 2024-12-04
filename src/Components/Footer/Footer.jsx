import React from 'react';
import './../../Customstylesheet/Footer.css';  // Custom styles for the footer

const Footer = () => {
  return (
    <footer className="footer py-5 ">
      <div className="container-fluid">
        <div className="row">

          {/* Company Info Section */}
          <div className="col-md-4 mb-4">
            <h4 className="footer-title">E-Shop</h4>
            <p>Discover the best products at affordable prices. We bring the latest trends in fashion, gadgets, and more!</p>
            <div className="footer-social-icons">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/products" className="footer-link">Shop</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p><i className="bi bi-geo-alt"></i> 123 E-Shop Street, New York, USA</p>
            <p><i className="bi bi-envelope"></i> contact@eshop.com</p>
            <p><i className="bi bi-telephone"></i> +1 234 567 890</p>
          </div>
        </div>

      

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="text-white">&copy; {new Date().getFullYear()} E-Shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
