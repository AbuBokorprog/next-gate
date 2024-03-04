"use client";
import React from "react";
import { useForm } from "react-hook-form";

const About = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <label htmlFor="email">Email:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            type="email"
            placeholder="Type your name"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p role="alert">Email is required</p>
          )}
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            type="text"
            {...register("subject", { required: true })}
          />
          {errors.subject?.type === "required" && (
            <p role="alert">Name is required</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("message", { required: true })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full my-5 text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default About;
