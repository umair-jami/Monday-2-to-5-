import React from "react";
import heroImg from "../../assets/jamilink.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section
      id="about"
      className="container h-auto w-full max-w-6xl px-6 py-12 lg:h-[calc(100vh-4rem)]"
    >
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between h-full">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left h-full">
          <h1 className="text-4xl lg:text-5xl font-bold">I'm Jami K.</h1>
          <h3 className="text-xl lg:text-2xl mt-2">
            Web Developer / Web Designer / Software Engineer
          </h3>
          <p className="w-full lg:w-[60%] mt-6 text-gray-700 dark:text-gray-300">
            My mission is to help your business grow through my
            conversion-focused branding, design, marketing, and communication
            expertise.
          </p>
          <Button className="bg-yellow mt-6">Explore My Work</Button>
        </div>

        {/* Image */}
        <div className="w-64 h-64 lg:w-96 lg:h-96 flex-shrink-0">
          <Image
            src={heroImg}
            alt="HeroImg"
            className="w-[70%] h-[80%] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
