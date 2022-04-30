import React from "react";
import useProducts from "../../../hooks/useProducts.js";
import Product from "../../shared/Product/Product.jsx";

const HomeInventory = () => {
  const [porducts] = useProducts();
  return (
    <div className="product-container">
      {porducts.slice(0, 6).map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomeInventory;
