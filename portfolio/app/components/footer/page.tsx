import React from "react";
import xIcon from "../../assets/TwitterX.png";
import fbIcon from "../../assets/Facebook.png";
import instaIcon from "../../assets/Instagram Circle.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-Inp py-6 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:h-[4rem] lg:mt-52">
      {/* Footer Text */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p className="text-gray-300 text-sm">
          © 2020 All rights reserved. Designed by{" "}
          <span className="text-yellow font-semibold">UMAIR</span>
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center md:justify-end gap-6">
        {/* Facebook */}
        <div className="flex items-center gap-2">
          <Image src={fbIcon} alt="Facebook Icon" className="w-6 h-6" />
          <h3 className="text-sm text-gray-300">Facebook</h3>
        </div>

        {/* Twitter */}
        <div className="flex items-center gap-2">
          <Image src={xIcon} alt="Twitter X Icon" className="w-6 h-6" />
          <h3 className="text-sm text-gray-300">Twitter</h3>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-2">
          <Image src={instaIcon} alt="Instagram Icon" className="w-6 h-6" />
          <h3 className="text-sm text-gray-300">Instagram</h3>
        </div>
      </div>
    </footer>
  );
}
