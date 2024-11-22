import { Button } from '@/components/ui/button';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="container px-6 py-12 lg:h-[calc(100vh-4rem)] max-w-6xl">
      {/* Header Section */}
      <div className="text-center lg:text-left lg:mt-20">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Let's get in <span className="text-yellow">touch</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-4 mx-auto lg:mx-0 lg:w-[60%]">
          My mission is to help your business grow through my conversion-focused branding, 
          design, marketing, and communication expertise.
        </p>
      </div>

      {/* Form Section */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Name Input */}
        <div>
          <h3 className="text-yellow mb-2">Name:</h3>
          <input
            className="placeholder:italic placeholder:text-gray-500 block bg-gray-100 dark:bg-gray-800 w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter Your Name..."
            type="text"
            name="name"
          />
        </div>

        {/* Email Input */}
        <div>
          <h3 className="text-yellow mb-2">Email:</h3>
          <input
            className="placeholder:italic placeholder:text-gray-500 block bg-gray-100 dark:bg-gray-800 w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter Your Email..."
            type="email"
            name="email"
          />
        </div>

        {/* Message Input */}
        <div className="lg:col-span-2">
          <h3 className="text-yellow mb-2">Message:</h3>
          <textarea
            className="placeholder:italic placeholder:text-gray-500 block bg-gray-100 dark:bg-gray-800 w-full border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter Your Message..."
            rows={5}
          ></textarea>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 text-center lg:text-left">
        <Button size="lg" className="bg-yellow px-8 py-3">
          Get Started
        </Button>
      </div>
    </section>
  );
}
