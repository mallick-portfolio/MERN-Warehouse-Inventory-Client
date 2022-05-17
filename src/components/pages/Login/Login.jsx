import React, { useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "./../../shared/Social/Social";
import auth from "./../../../firebase.init";
import Loading from "../../shared/Loading/Loading.jsx";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm();

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (error) {
      toast("Your email or password are not correct. Please try again");
      navigate("/login");
    }
  }, [error, navigate]);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const onSubmit = async (data, e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(data.email, data.password);
    const email = data.email;

    await axios.post("https://fathomless-dawn-54190.herokuapp.com/login", { email }).then((res) => {
      console.log(res.data);
      localStorage.setItem("accessToken", res.data);
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="form-container">
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
          <div className="my-2">
            <button
              onClick={async () => {
                const email = getValues("email");
                if (email) {
                  await sendPasswordResetEmail(email);
                  toast("please check your email");
                }
              }}
              className="exist-account"
            >
              Forget Password
            </button>
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
          <p className="exist-account mt-2">Social Login</p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Login;
