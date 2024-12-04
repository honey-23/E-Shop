import React from 'react';
import Layout from '../../Components/Layout/Layout';
import './../../Customstylesheet/CartPage.css';

export const Cart = ({ cart }) => {
  return (
    <Layout>
      <div className="cart-container-modern">
        <h2 className="cart-title-modern">Shopping Cart</h2>

        <div className="cart-content-modern">
          {/* Cart Items Section */}
          <div className="cart-items-modern">
            {cart.length > 0 ? (
              cart.map((cartItem, index) => (
                <div className="cart-item-modern" key={index}>
                  <div className="cart-item-image-wrapper">
                    <img
                      src={cartItem.thumbnail || 'https://via.placeholder.com/120'}
                      alt={cartItem.title || 'Product'}
                      className="cart-item-image"
                    />
                  </div>
                  <div className="cart-item-details-modern">
                    <h3 className="cart-item-name">{cartItem.title}</h3>
                    <p className="cart-item-description">{cartItem.description}</p>
                    <div className="cart-item-price-modern">${cartItem.price}</div>
                  </div>
                  <div className="cart-item-quantity-modern">
                    <button className="quantity-btn-modern">-</button>
                    <span className="quantity-value-modern">1</span>
                    <button className="quantity-btn-modern">+</button>
                  </div>
                  <div className="cart-item-action-modern">
                    <button className="remove-btn-modern">Remove</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="cart-empty-message">Your cart is empty!</p>
            )}
          </div>

          {/* Cart Summary Section */}
          <div className="cart-summary-modern">
            <h3 className="summary-title-modern">Order Summary</h3>
            <div className="summary-details-modern">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total:</span>
                <span>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
              </div>
            </div>
            <button className="checkout-btn-modern">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
