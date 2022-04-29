import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Social from './../../shared/Social/Social';
import auth from './../../../firebase.init';
import Loading from "../../shared/Loading/Loading.jsx";
import { toast } from 'react-toastify';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm();
  const navigate = useNavigate()
  useEffect(() => {
    if (error) {
      toast("abc");
      navigate("/login");
    }
  }, [error, navigate]);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  const onSubmit = async (data, e) => {
    e.preventDefault();
    signInWithEmailAndPassword(data.email, data.password)
  };
  return (
    <div className="container mx-auto my-10 w-full max-w-sm">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value:
                    // eslint-disable-next-line no-useless-escape
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              })}
              className={`input-field  ${
                !errors.email && dirtyFields.email && "!bg-green-50"
              }`}
              id="email"
              type="email"
              placeholder="Email"
            />
            <span className="text-red-500">{errors.email?.message}</span>
          </div>
          <div className="mb-4">
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
              className="input-field"
              id="password"
              type="password"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button className="input-btn" type="submit">
              Login
            </button>
            <Link className="exist-account" to="/register">
              Create new Account
            </Link>
          </div>
        </form>
        <div>
          <p className="exist-account mt-2">Login with social</p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Login;
