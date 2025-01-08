import React from "react";

const SimpleForm = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <form className="bg-slate-100 px-10 py-4 shadow-md rounded w-1/4 flex flex-col justify-between">
        <h1 className="text-xl font-bold text-gray-700">Sign up</h1>
        <div className="mt-6">
          <div className="pb-4">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="mt-1 w-full rounded text-sm p-2"
            />
          </div>
          <div className="pb-4">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="mt-1 w-full rounded text-sm p-2"
            />
          </div>
          <div className="pb-4">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="mt-1 w-full rounded text-sm p-2"
            />
          </div>
          <div className="pb-4">
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirm Password"
              className="mt-1 w-full rounded text-sm p-2"
            />
          </div>
          <button type="submit" className="mt-4 w-full bg-teal-500 text-white p-2 rounded">Sign Up</button>
        </div>
      </form>
    </main>
  );
};

export default SimpleForm;
