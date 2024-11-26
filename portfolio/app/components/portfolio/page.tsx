import Image from "next/image";
import React from "react";
import portfolio1 from "../../assets/gemini.png";
import portfolio2 from "../../assets/lawyer.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="container px-6 py-12 lg:h-[calc(100vh-4rem)] w-full max-w-6xl lg:mb-12"
    >
      {/* Header Section */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Check out my <span className="text-yellow">Portfolio</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-4 mx-auto lg:mx-0 lg:w-[60%]">
          Showcasing creative designs, innovative projects, impactful solutions,
          proven expertise, and dedicated efforts to elevate brands and
          businesses effectively.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* Portfolio Item 1 */}
        <div className="bg-boxbg rounded-lg overflow-hidden shadow-md img-container">
          <Image
            src={portfolio1}
            alt="Gemini Project"
            className="w-full h-44 object-cover"
          />
          <div className="img-content">
            <a
              href="https://gemini-clone9948.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Go to Website
            </a>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="bg-boxbg rounded-lg overflow-hidden shadow-md img-container">
          <Image
            src={portfolio2}
            alt="Lawyer Project"
            className="w-full h-44 object-cover"
          />
          <div className="img-content">
            <a
              href="https://lawyersassociates.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Go to Website
            </a>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className="bg-boxbg rounded-lg overflow-hidden shadow-md img-container">
          <Image
            src={portfolio3}
            alt="Portfolio Project 3"
            className="w-full h-44 object-cover"
          />
          <div className="img-content">
            <a
              href="https://umairportfilioxyz.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Go to Website
            </a>
          </div>
        </div>

        {/* Portfolio Item 4 */}
        <div className="bg-boxbg rounded-lg overflow-hidden shadow-md relative img-container">
          <Image
            src={portfolio4}
            alt="Portfolio Project 4"
            className="w-full h-44 object-cover"
          />
          <div className="img-content">
            <a
              href="https://weather-app-flame-iota-18.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Go to Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
