import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const HomePage = () => {
  return (
    <div className={` ${poppins.className} min-h-screen bg-gray-100 text-gray-800`}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">Word Warehouse 📦</span>
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline sm:text-base"
          >
            My words
          </a>
        </div>
        {/* Clerk Authentication */}
        <div>
          <Link href="/sign-up">
            <button className="mr-6">Sign up</button>
          </Link>

          <SignedOut>
            <SignInButton mode="modal"/>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center mt-10 px-4 sm:px-8 lg:px-20">
        <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2">
          Welcome 👋!
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base max-w-3xl">
          Word Warehouse is your personal vocabulary expansion tool. It&apos;s a
          unique platform where you can store, remember, and learn new words
          every day. Enhance your language skills and build a rich word vault
          right here. Dive in, discover more, and make your language journey
          more exciting with us!
        </p>
        <p className="mt-6 text-lg font-medium text-gray-800">
          Some recent words from all users for you to peruse
        </p>
      </main>
    </div>
  );
};

export default HomePage;
