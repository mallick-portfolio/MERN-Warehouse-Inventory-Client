import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init.js";
import Loading from "../../shared/Loading/Loading.jsx";

const AddProduct = () => {
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  if(loading){
    return <Loading />
  }

 

  const onSubmit = (data, e) => {
    data.email = user.email
    e.preventDefault();
    fetch('http://localhost:5000/product', {
      method: "POST",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Product Added Successfully");
        navigate('/manage-inventory')
      });


    e.target.reset();
  };
  return (
    <div className="container mx-auto my-10 w-full">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="input-label">Product Title</label>
            <input
              className="input-field"
              type="text"
              {...register("name")}
              placeholder="Product Title"
            />
          </div>
          <div className="mb-4">
            <label className="input-label">Product Description</label>
            <input
              className="input-field"
              type="text"
              {...register("description")}
              placeholder="Product Description"
            />
          </div>
          <div className="mb-4">
            <label className="input-label">Product Image URL</label>
            <input
              className="input-field"
              type="text"
              {...register("image")}
              placeholder="Product Image URL"
            />
          </div>

          <div className="mb-4">
            <label className="input-label">Product Price</label>
            <input
              className="input-field"
              type="text"
              {...register("price")}
              placeholder="Product Price"
            />
          </div>
          <div className="mb-4">
            <label className="input-label">Product Quantity</label>
            <input
              className="input-field"
              type="text"
              {...register("quantity")}
              placeholder="Product Quantity"
            />
          </div>
          <div className="mb-4">
            <label className="input-label">Product Sold</label>
            <input
              className="input-field"
              type="text"
              {...register("sold")}
              placeholder="Product Sold"
            />
          </div>
          <div className="mb-4">
            <label className="input-label">Product Supplier</label>
            <input
              className="input-field"
              type="text"
              {...register("supplier")}
              placeholder="Product Supplier"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="input-btn" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
