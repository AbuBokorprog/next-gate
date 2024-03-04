"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const SignUp = () => {
  const [isMatch, setIsMatch] = useState();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="w-full max-w-lg mx-auto p-4 border bg-primary-100 border-dark-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-dark-800 dark:border-dark-700">
        <h2 className="text-3xl text-center font-medium text-dark-900 dark:text-white">
          Sign up
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="displayName"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your name"
              {...register("displayName", { required: true })}
              aria-invalid={errors.displayName ? "true" : "false"}
            />
            {errors.displayName?.type === "required" && (
              <p role="alert">Name is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your name"
              type="email"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p role="alert">Email is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your password"
              {...register("password", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === "required" && (
              <p role="alert">Password is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Type your password"
              {...register("confirmPassword", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
              aria-invalid={errors.confirmPassword ? "true" : "false"}
            />
            {errors.confirmPassword?.type === "required" && (
              <p role="alert">Confirm Password is required</p>
            )}
            {isMatch && <p className="text-primary-500">{isMatch}</p>}
          </div>
          <div>
            <label
              htmlFor="photoURL"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image URL
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="paste your Image URL"
              {...register("photoURL", { required: true })}
              aria-invalid={errors.photoURL ? "true" : "false"}
            />
            {errors.photoURL?.type === "required" && (
              <p role="alert">Image is required</p>
            )}
          </div>
          {/* {isLoading ? (
          <button
            type="submit"
            className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Loading....
          </button>
        ) : (
          <button
            type="submit"
            className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Registered
          </button>
        )} */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Registered
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?
            <Link
              href="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
