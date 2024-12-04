import React from 'react';
import './../../Customstylesheet/Herosection.css';
import newHeroImg from './../../assets/images/heroimg.jpg';

const Herosection = () => {
  return (
    <section className="hero-section d-flex justify-content-center align-items-center">
      <div className="container-fluid text-center text-white">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6 text-md-start text-center animate-text">
            <h1 className="hero-title">Welcome to Shop</h1>
            <p className="hero-description">
              Discover the latest fashion trends, exclusive deals, and more at unbeatable prices.
            </p>
            <div className="hero-buttons">
              <a href="/shop" className="btn hero-btn me-2">Start Shopping</a>
              {/* <a href="/offers" className="btn hero-btn-secondary">Explore Offers</a> */}
            </div>
          </div>
          {/* Image Content */}
          <div className="col-md-6 mt-4 mt-md-0 animate-image">
            <img
              src={newHeroImg}
              alt="Shop Now"
              className="hero-image img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
