import React from "react";
import img1 from "../../assets/1st.jpg";
import img2 from "../../assets/2nd.jpg";
import img3 from "../../assets/3rd.webp";
import img4 from "../../assets/4th.png";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="container px-6 py-12 lg:h-[calc(100vh-4rem)] lg:mt-6 w-full max-w-6xl"
    >
      {/* Header Section */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Listen to our <span className="text-yellow">Customer</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-4 mx-auto lg:mx-0 lg:w-[60%]">
          Showcasing creative designs, innovative projects, impactful solutions, proven expertise, and dedicated efforts to elevate brands and businesses effectively.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
        {/* Testimonial 1 */}
        <div className="bg-boxbg p-6 rounded-lg shadow-md">
          <div className="flex items-start">
            <Image
              src={img1}
              alt="David"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Jane’s invaluable leadership skills and strategic insights drive
                unparalleled sales success for businesses across industries.
              </p>
              <h3 className="text-yellow mt-4">David</h3>
              <p className="text-sm text-gray-500">President of Sale</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-boxbg p-6 rounded-lg shadow-md">
          <div className="flex items-start">
            <Image
              src={img2}
              alt="Willium"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Eleanor’s dedication to patient care and positive energy make
                her a trusted figure in the healthcare community.
              </p>
              <h3 className="text-yellow mt-4">Willium</h3>
              <p className="text-sm text-gray-500">Nursing Assistant</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-boxbg p-6 rounded-lg shadow-md">
          <div className="flex items-start">
            <Image
              src={img3}
              alt="Umair Jami"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Annette’s creativity and sharp design skills transform ideas
                into visually stunning and user-friendly digital experiences.
              </p>
              <h3 className="text-yellow mt-4">Umair Jami</h3>
              <p className="text-sm text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="bg-boxbg p-6 rounded-lg shadow-md">
          <div className="flex items-start">
            <Image
              src={img4}
              alt="Bilal Jami"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Jenny’s commitment to healthcare excellence and her compassionate
                care set a standard in the medical field.
              </p>
              <h3 className="text-yellow mt-4">Bilal Jami</h3>
              <p className="text-sm text-gray-500">CEO of TreeZone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
