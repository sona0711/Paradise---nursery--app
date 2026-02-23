import React, { useState } from "react";
import ProductList from "./Components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="background-image">
      <h1>Welcome to Paradise Nursery</h1>

      {!showProducts && (
        <button onClick={() => setShowProducts(true)}>
          Get Started
        </button>
      )}

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
