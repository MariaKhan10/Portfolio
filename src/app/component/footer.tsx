"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div
      style={{ background: "black" }}
      className="text-white py-3 backdrop-blur-md"
    >
      <footer className="body-font">
        <div className="container px-5 mx-auto flex flex-col sm:flex-row items-center justify-between">
          
          {/* Logo + Name */}
          <a className={`flex title-font items-center text-white mb-4 sm:mb-0 ${greatVibes.className}`}>
            <Image
              alt="Maria Khan Logo"
              width={40}
              height={40}
              src={require("../../../public/pictures/logo3.png")}
              className="rounded-full"
            />
            <span className="ml-3 text-2xl bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#00d4ff] text-transparent bg-clip-text">
              Maria Khan
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
            © 2026 Maria Khan
          </p>

          {/* Social Icons */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
            <Link target="_blank" href="https://www.instagram.com/khan__mariah?igsh=MXBqbGJzcjl0OW5rMQ==" className="text-gray-400 hover:text-[#e4405f] transition duration-300 ease-in-out">
              <FaInstagram className="text-2xl hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link target="_blank" href="https://github.com/MariaKhan10" className="text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out">
              <FaGithub className="text-2xl hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/mariakhan10/" className="text-gray-400 hover:text-[#0077b5] transition duration-300 ease-in-out">
              <FaLinkedin className="text-2xl hover:scale-110 transition-transform duration-300" />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=100003139598578&mibextid=ZbWKwL" className="text-gray-400 hover:text-[#3b5999] transition duration-300 ease-in-out">
              <FaFacebook className="text-2xl hover:scale-110 transition-transform duration-300" />
            </Link>
          </span>

        </div>
      </footer>
    </div>
  );
};

export default Footer;