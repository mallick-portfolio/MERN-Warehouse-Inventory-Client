import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, description, image, _id, price, quantity, supplier } = product;
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md">
      <img className="p-8 rounded-t-lg h-60  w-screen" src={image} alt="" />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex my-2 justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <div></div>
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="text-xl">quantity</div>
          <span className="text-sm text-gray-900 dark:text-white">
            {quantity}
          </span>
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="text-xl">supplier</div>
          <span className="text-sm text-gray-900 dark:text-white">
            {supplier}
          </span>
        </div>
        <div className="my-2 text-xl">
          {description.length > 50 ? description.slice(0, 50) : description}
        </div>
        <div className="flex justify-center items-center">
          <Link to={`/inventory/${_id}`} className="addToCart-btn">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
