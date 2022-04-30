import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts.js";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init.js";
import { Link } from "react-router-dom";
const Inventory = () => {
  const [user] = useAuthState(auth);
  const [allproducts] = useProducts();
  const [products, setProducts] = useState([])
  useEffect(()=> {
    // eslint-disable-next-line eqeqeq
    const userProduct = allproducts.filter(product => product.email == user.email)
    setProducts(userProduct)
  },[allproducts, user.email])



  return (
    <div className="relative container mx-auto m-10 overflow-x-auto shadow-md sm:rounded-lg">
      <div className="mb-2">
        <button
          type="button"
          className="managein-btn"
        >
         <Link to={"/product/add"}>Add new item</Link>
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              supplier
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="table-content">
              <th scope="row" className="table-th">
                {product.name}
              </th>
              <td className="px-6 py-4">${product.price}</td>
              <td className="px-6 py-4">{product.quantity}</td>
              <td className="px-6 py-4">{product.supplier}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href="/"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
