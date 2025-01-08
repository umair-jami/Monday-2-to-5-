"use client";
import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, formType } from "@/lib/schemas";

const ZodForm = () => {
  const ref=useRef<HTMLFormElement>(null)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formType>({ resolver: zodResolver(signUpSchema) });

  const onsubmit: SubmitHandler<formType> = async (data: formType) => {
    const response = await fetch("/api/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
    });
    if(!response.ok){
      alert("something went wrong")
    }
    const result = await response.json();
    console.log(result.errors)
    if (result.errors) {
      if (result.errors.name) {
        setError("name", { type: "server", message: result.errors.name });
      } else if (result.errors.email) {
        setError("email", { type: "server", message: result.errors.email });
      } else if (result.errors.password) {
        setError("password", {
          type: "server",
          message: result.errors.password,
        });
      } else if (result.errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: result.errors.confirmPassword,
        });
      } else {
        alert("something went wrong");
      }
    }else{
      alert("Sign up successful");
      ref.current?.reset();
    }
    // console.log(result)
  };
  return (
    <main className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8">
      <form ref={ref}
        onSubmit={handleSubmit(onsubmit)}
        className="bg-slate-100 px-6 py-4 shadow-md rounded w-full max-w-md sm:px-8 sm:py-6 md:px-10"
      >
        <h1 className="text-lg sm:text-xl font-bold text-gray-700 text-center">
          Sign up
        </h1>
        <div className="mt-6">
          <div className="pb-4">
            <input
              {...register("name")}
              type="text"
              name="name"
              placeholder="name"
              className="mt-1 w-full rounded text-sm p-2 text-black"
            />
            {errors.name && (
              <p className="text-red-500 text-xs sm:text-sm">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="pb-4">
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="email"
              className="mt-1 w-full rounded text-sm p-2 text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-xs sm:text-sm">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="pb-4">
            <input
              {...register("password")}
              type="text"
              name="password"
              placeholder="password"
              className="mt-1 w-full rounded text-sm p-2 text-black"
            />
            {errors.password && (
              <p className="text-red-500 text-xs sm:text-sm">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="pb-4">
            <input
              {...register("confirmPassword")}
              type="text"
              name="confirmPassword"
              placeholder="confirm Password"
              className="mt-1 w-full rounded text-sm p-2 text-black"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs sm:text-sm">
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
                : "opacity-100 cursor-pointer"
            }`}
          >
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
};

export default ZodForm;
