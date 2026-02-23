import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 100 },
    { id: 2, name: "Snake Plant", price: 150 },
    { id: 3, name: "Spider Plant", price: 120 },
    { id: 4, name: "Peace Lily", price: 180 },
    { id: 5, name: "Money Plant", price: 130 },
    { id: 6, name: "ZZ Plant", price: 200 }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 80 },
    { id: 8, name: "Tulsi", price: 60 },
    { id: 9, name: "Hibiscus", price: 90 },
    { id: 10, name: "Jasmine", price: 110 },
    { id: 11, name: "Sunflower", price: 70 },
    { id: 12, name: "Marigold", price: 50 }
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 120 },
    { id: 14, name: "Echeveria", price: 140 },
    { id: 15, name: "Sedum", price: 130 },
    { id: 16, name: "Haworthia", price: 160 },
    { id: 17, name: "Agave", price: 180 },
    { id: 18, name: "Crassula", price: 150 }
  ]
};

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plant Categories</h2>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants[category].map(p => (
            <div key={p.id}>
              <p>{p.name} - ₹{p.price}</p>
              <button onClick={() => dispatch(addItem(p))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
