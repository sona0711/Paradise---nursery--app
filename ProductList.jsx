import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 100, image: "🌿" },
  { id: 2, name: "Snake Plant", price: 150, image: "🌱" },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants</h2>
      {plants.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => dispatch(addItem(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;src/Components/ProductList.jsx
