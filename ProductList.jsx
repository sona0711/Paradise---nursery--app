import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plantsData = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 100, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 150, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Spider Plant", price: 120, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Peace Lily", price: 180, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Money Plant", price: 130, image: "https://via.placeholder.com/100" },
    { id: 6, name: "ZZ Plant", price: 200, image: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 80, image: "https://via.placeholder.com/100" },
    { id: 8, name: "Tulsi", price: 60, image: "https://via.placeholder.com/100" },
    { id: 9, name: "Hibiscus", price: 90, image: "https://via.placeholder.com/100" },
    { id: 10, name: "Jasmine", price: 110, image: "https://via.placeholder.com/100" },
    { id: 11, name: "Sunflower", price: 70, image: "https://via.placeholder.com/100" },
    { id: 12, name: "Marigold", price: 50, image: "https://via.placeholder.com/100" }
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 120, image: "https://via.placeholder.com/100" },
    { id: 14, name: "Echeveria", price: 140, image: "https://via.placeholder.com/100" },
    { id: 15, name: "Sedum", price: 130, image: "https://via.placeholder.com/100" },
    { id: 16, name: "Haworthia", price: 160, image: "https://via.placeholder.com/100" },
    { id: 17, name: "Agave", price: 180, image: "https://via.placeholder.com/100" },
    { id: 18, name: "Crassula", price: 150, image: "https://via.placeholder.com/100" }
  ]
};

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <h2>Plant Categories</h2>

      {Object.keys(plantsData).map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plantsData[category].map(p => (
            <div key={p.id}>
              <img src={p.image} alt={p.name} />
              <p>{p.name} - ₹{p.price}</p>

              <button
                onClick={() => handleAdd(p)}
                disabled={addedItems.includes(p.id)}
              >
                {addedItems.includes(p.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
