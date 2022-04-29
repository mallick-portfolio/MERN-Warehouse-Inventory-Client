import React from "react";
import useProducts from "../../../hooks/useProducts.js";

const HomeInventory = () => {
  const [porducts, setProducts] = useProducts();
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4">
      <div className="...">
        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <img
              className="p-8 rounded-t-lg"
              src="https://i.ibb.co/7R3rcPX/fruit2.jpg"
              alt=""
            />
          </a>
          <div className="px-5 pb-5">
            <a href="/">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <a
                href="/"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInventory;
