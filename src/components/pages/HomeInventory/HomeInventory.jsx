import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts.js";
import Product from "../../shared/Product/Product.jsx";

const HomeInventory = () => {
  const [porducts] = useProducts();
  return (
    <div>
      <div className="product-container">
        {porducts.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="flex my-5 space-x-2 justify-center">
        <button
          type="button"
          className="managein-btn"
        >
         <Link to={"/manage-inventory"}>Manage Inventories</Link>
        </button>
      </div>
    </div>
  );
};

export default HomeInventory;
