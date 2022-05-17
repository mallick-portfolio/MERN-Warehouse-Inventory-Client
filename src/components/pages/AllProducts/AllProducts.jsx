import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";
import axios from "axios";
import Loading from "../../shared/Loading/Loading.jsx";
const AllProducts = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://fathomless-dawn-54190.herokuapp.com/products`;
  useEffect(() => {
    const loadProduct = async () => {
      const res = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const result = res.data;
      setProducts(result);
      setIsLoading(false);
    };
    loadProduct();
  }, [url, user.email]);

  return (
    <div className="relative container mx-auto m-10 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {isLoading ? (
            <Loading />
          ) : (
            <tr>
              <td>ID</td>
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
          )}
        </thead>
        <tbody>
          {isLoading ? (
            <Loading />
          ) : (
            products.map((product, i) => (
              <tr key={product._id} className="table-content">
                <th>{i + 1}</th>
                <th scope="row" className="table-th">
                  {product.name}
                </th>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">{product.supplier}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
