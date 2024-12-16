import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import person from "@/public/clothes5.webp"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function SignupPage() {
  return (
    <div className={` ${poppins.className} flex flex-col lg:flex-row min-h-screen`}>
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center bg-blue-600 p-8">
        <div className="text-white max-w-md text-center">
          {/* Placeholder for Image */}
          <div className="h-50 w-56 bg-white rounded-full mb-6 mx-auto">
            <Image src={person} alt="person" className="rounded-full"/>
          </div>
          {/* Content */}
          <h2 className="text-lg font-bold mb-2">Umair Jami</h2>
          <p className="text-gray-300 text-sm mb-6">Former Chief Talent Officer</p>
          <p className="text-lg font-semibold mb-2">
            <span className="text-yellow-400">Shopify</span>
          </p>
          <blockquote className="text-sm italic leading-relaxed">
            <span className="font-bold text-white">
              "Fellow has been a game-changer for us."
            </span>
            I love how easy it is to use. It intuitively builds into my day-to-day
            rhythm and the natural flow of Shopify, making it so much simpler to
            have valuable conversations.
          </blockquote>
          {/* Logos */}

        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center p-8">
        <div className="max-w-sm mx-auto">
          <h1 className="text-center text-3xl font-bold mb-4">Welcome to FELLOW</h1>
          <p className="text-gray-600 text-center mb-8">
            Sign up by connecting your work calendar
          </p>

          {/* Clerk SignUp Component */}
          <div className="space-y-4">
            <SignUp />
          </div>

         
          <p className="text-center text-xs text-gray-400 mt-4">
            By continuing I agree to the{" "}
            <a href="#" className="text-blue-400 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 underline">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
