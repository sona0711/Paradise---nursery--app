import React from "react";
import { useSelector } from "react-redux";

function CartItem() {
  const cart = useSelector(state => state.cart);

  const total = cart.reduce((sum, item) => 
    sum + item.price * item.quantity, 0
  );

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price} x {item.quantity}</p>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default CartItem;src/Components/CartItem.jsx
