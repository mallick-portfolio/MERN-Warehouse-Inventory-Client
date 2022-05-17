import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {



  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const { name, description, image, price, quantity, supplier, sold } = product;



  useEffect(() => {
    const loadProduct = async () => {
      const res = await axios.get(`https://fathomless-dawn-54190.herokuapp.com/inventory/${id}`);
      const result = res.data;
      setProduct(result);
    };
    loadProduct();
  }, [id]);



  
  const handleDecrement = () => {
    product.quantity = parseInt(quantity) - 1;
    fetch(`https://fathomless-dawn-54190.herokuapp.com/inventory/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        const loadProduct = async () => {
          const res = await axios.get(`https://fathomless-dawn-54190.herokuapp.com/inventory/${id}`);
          const result = res.data;
          setProduct(result);
        };
        loadProduct();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  


  const updateQuantity = (e) => {
    e.preventDefault();
    const productQuantity = e.target.quantity.value;

    product.quantity = parseInt(quantity) + parseInt(productQuantity);
    fetch(`https://fathomless-dawn-54190.herokuapp.com/inventory/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        const loadProduct = async () => {
          const res = await axios.get(`https://fathomless-dawn-54190.herokuapp.com/inventory/${id}`);
          const result = res.data;
          setProduct(result);
        };
        loadProduct();
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    e.target.reset();
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-10 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {name}
            </h1>
            <p className="leading-relaxed">{description}</p>
            <div className="flex justify-between items-center my-2">
              <div className="text-2xl">Price</div>
              <span className="text-3xl font-semibold text-gray-900 dark:text-white">
                ${price}
              </span>
            </div>
            <div className="flex justify-between items-center my-2">
              <div className="text-2xl">Quantity</div>
              <span className="text-3xl font-semibold text-gray-900 dark:text-white">
                {quantity}
              </span>
            </div>
            <div className="flex justify-between items-center my-2">
              <div className="text-2xl">Supplier</div>
              <span className="text-3xl font-semibold text-gray-900 dark:text-white">
                {supplier}
              </span>
            </div>
            <div className="flex justify-between items-center my-2">
              <div className="text-2xl">Sold</div>
              <span className="text-3xl font-semibold text-gray-900 dark:text-white">
                {sold}
              </span>
            </div>
            <div className="flex justify-center items-center">
              <button onClick={handleDecrement} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Delivered
              </button>
            </div>
            <form onSubmit={updateQuantity}>
              <div className="flex justify-between items-center my-2">
                <div className="text-3xl font-semibold text-gray-900 dark:text-white">
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Enter quantity"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Add Quantity
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
