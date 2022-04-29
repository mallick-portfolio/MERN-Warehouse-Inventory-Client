import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Social from "../shared/Social/Social.jsx";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import Loading from "../shared/Loading/Loading.jsx";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm();
  const password = useRef({});

  password.current = watch("password", "");

  useEffect(() => {
    if (error) {
      toast("Your Email Already exist");
      navigate("/register");
    }
  }, [error, navigate]);
  let load;
  if (loading) {
    load = <Loading />
    return load;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }
  const onSubmit = async (data, e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="container mx-auto my-10 w-full max-w-sm">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="input-label" htmlFor="username">
              Username
            </label>
            <input
              
              {...register("userName", { required: true, maxLength: 20 })}
              className="input-field"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
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
          <div className="mb-4">
            <label className="input-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              {...register("password_repeat", {
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
              className="input-field"
              id="confirmPassword"
              type="password"
              placeholder="********"
            />
            {errors.password_repeat && (
              <p className="text-red-500">{errors.password_repeat.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button className="input-btn" type="submit">
              Sign In
            </button>
            <Link className="exist-account" to="/login">
              Already have an account
            </Link>
          </div>
        </form>
        <div>
          <p className="exist-account mt-2">Signup with social</p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Register;
