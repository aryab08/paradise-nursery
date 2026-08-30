import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Calculate the total number of products
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate the total cost of the cart
  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Increase quantity
  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease quantity
  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  // Delete item
  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  // Checkout
  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="navbar-links">
          <Link to="/">Home</Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link to="/cart">
            🛒 Cart ({totalItems})
          </Link>
        </div>
      </nav>

      {/* Shopping Cart */}
      <main className="page-container">
        <h1>Shopping Cart</h1>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div>
            <h2>Your cart is empty.</h2>

            <Link to="/plants">
              <button className="continue-btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                {/* Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  {/* Plant Name */}
                  <h2>{item.name}</h2>

                  {/* Unit Price */}
                  <p>
                    Unit Price: ${item.price}
                  </p>

                  {/* Total Cost For This Plant */}
                  <p>
                    Total Cost: $
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        decreaseQuantity(item)
                      }
                    >
                      -
                    </button>

                    <span>
                      Quantity: {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item)
                      }
                    >
                      +
                    </button>
                  </div>

                  {/* Delete */}
                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteItem(item.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="cart-summary">
              <h2>
                Total Amount: $
                {totalAmount.toFixed(2)}
              </h2>

              {/* Checkout */}
              <button
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              {/* Continue Shopping */}
              <Link to="/plants">
                <button className="continue-btn">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default CartItem;