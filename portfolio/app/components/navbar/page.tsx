'use client'
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-Inp h-20 w-full px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
      {/* Logo */}
      <div>
        <h2 className="text-white text-lg font-bold">
          Jami King <span className="text-yellow">.</span>
        </h2>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4">
        <Link
          href={"/"}
          className="text-white hover:text-yellow hover:border-b-2 border-yellow"
        >
          About
        </Link>
        <Link
          href={"#services"}
          className="text-white hover:text-yellow hover:border-b-2 border-yellow"
        >
          Services
        </Link>
        <Link
          href={"#portfolio"}
          className="text-white hover:text-yellow hover:border-b-2 border-yellow"
        >
          Portfolio
        </Link>
        <Link
          href={"#testimonial"}
          className="text-white hover:text-yellow hover:border-b-2 border-yellow"
        >
          Testimonials
        </Link>
        <Link
          href={"#contact"}
          className="text-white hover:text-yellow hover:border-b-2 border-yellow"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? (
            <span className="text-xl">&#x2715;</span> // Close Icon
          ) : (
            <span className="text-xl">&#9776;</span> // Hamburger Icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-Inp py-4 flex flex-col items-center space-y-4 md:hidden">
          <Link
            href={"/"}
            className="text-white hover:text-yellow hover:border-b-2 border-yellow"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href={"#services"}
            className="text-white hover:text-yellow hover:border-b-2 border-yellow"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href={"#portfolio"}
            className="text-white hover:text-yellow hover:border-b-2 border-yellow"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href={"#testimonial"}
            className="text-white hover:text-yellow hover:border-b-2 border-yellow"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href={"#contact"}
            className="text-white hover:text-yellow hover:border-b-2 border-yellow"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
