import React, { useRef } from "react";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm();
  const password = useRef({});

password.current = watch("password", "");
  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    
  };
  return (
    <div className="container mx-auto my-12 w-full max-w-sm">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="input-label" htmlFor="username">
            Username
          </label>
          <input
            autoComplete="off"
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
            autoComplete="off"
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value:
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
            {...register("password_repeat", { validate: value => value === password.current || "The passwords do not match" })}
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
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
