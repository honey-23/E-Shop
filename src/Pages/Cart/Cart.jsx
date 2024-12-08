import { useCart } from "../../Components/Context/CartContext";
import Layout from "../../Components/Layout/Layout";
import "./../../Customstylesheet/CartPage.css"; // Assuming custom styles for cart (you can create this file for styling)

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-8">
              <ul className="list-group">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-group-item d-flex align-items-center border-bottom py-3">
                    <img
                      src={item.thumbnail || (item.images && item.images[0])}
                      alt={item.title}
                      className="cart-item-img"
                    />
                    <div className="ms-3">
                      <h5 className="cart-item-title">{item.title}</h5>
                      <p className="cart-item-price">Price: ${item.price}</p>
                      <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-danger ms-auto"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-4">
              <div className="cart-summary">
                <h5 className="text-center mb-4">Order Summary</h5>
                <hr />
                <p className="d-flex justify-content-between">
                  <strong>Subtotal:</strong>
                  <span>${calculateTotal()}</span>
                </p>
                <p className="d-flex justify-content-between">
                  <strong>Shipping:</strong>
                  <span>$5.99</span>
                </p>
                <hr />
                <p className="d-flex justify-content-between fw-bold">
                  <strong>Total:</strong>
                  <span>${(parseFloat(calculateTotal()) + 5.99).toFixed(2)}</span>
                </p>
                <button className="btn btn-primary w-100">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
