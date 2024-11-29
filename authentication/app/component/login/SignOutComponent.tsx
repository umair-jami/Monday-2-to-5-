'use client'

import { signOut } from "next-auth/react";

export default function SignOutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-700">Sign Out</h1>
      <button
        onClick={() => signOut()}
        className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-300 ease-in-out"
      >
        Sign Out
      </button>
    </div>
  );
}
