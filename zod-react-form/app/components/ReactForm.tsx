"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type formType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<formType>();

  const onsubmit: SubmitHandler<formType> = async (data: formType) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };
  return (
    <main className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="bg-slate-100 px-10 py-4 shadow-md rounded w-1/4 flex flex-col justify-between"
      >
        <h1 className="text-xl font-bold text-gray-700">Sign up</h1>
        <div className="mt-6">
          <div className="pb-4">
            <input
              {...register("name", {
                minLength: { value: 3, message: "Minimum 3 characters" },
                required: true,
                maxLength: 20,
              })}
              type="text"
              name="name"
              placeholder="name"
              className="mt-1 w-full rounded text-sm p-2 text-black"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>
          <div className="pb-4">
            <input
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
              type="email"
              name="email"
              placeholder="email"
              className="mt-1 w-full rounded text-sm p-2 text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div className="pb-4">
            <input
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                },
              })}
              type="text"
              name="password"
              placeholder="password"
              className="mt-1 w-full rounded text-sm p-2 text-black"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <div className="pb-4">
            <input
              {...register("confirmPassword", {
                required: { value: true, message: "Password is required" },
                validate: (value) =>
                  value === getValues("password") || "Password does not match",
              })}
              type="text"
              name="confirmPassword"
              placeholder="confirm Password"
              className="mt-1 w-full rounded text-sm p-2 text-black"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 w-full bg-teal-500 text-white p-2 rounded ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "opcaity-100 cursor-pointer"
            }`}
          >
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
};

export default ReactForm;
