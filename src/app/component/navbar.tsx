"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineFileDownload, MdMenu, MdClose } from "react-icons/md";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import { Home, Info, Briefcase, Code, Mail } from "lucide-react";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "#about", icon: Info },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Projects", href: "#project", icon: Briefcase },
  { label: "Contact", href: "#Contact", icon: Mail },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarBackground = `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(26, 25, 25, 1))`;

  return (
    <div className="z-50 sticky top-0">
      <div
        style={{ background: navbarBackground }}
        className="py-2 px-3 shadow-lg backdrop-blur-lg"
      >
        <header className="body-font">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            {/* Logo + Name Centered on Mobile */}
            <div className="flex items-center justify-center mx-auto md:mx-0">
              <Image
                alt="logo"
                width={40}
                height={70}
                src="/pictures/logo3.png"
                className="rounded-lg"
              />
              <span
                className={`${greatVibes.className} title-font text-2xl sm:text-5xl lg:text-3xl font-bold 
                bg-gradient-to-r from-[#f3a136] via-[#ff4e50] to-[#f9d423] text-transparent bg-clip-text 
                transition-all duration-500 ease-in-out hover:drop-shadow-[0_0_15px_#ff4e50] 
                hover:tracking-wide hover:scale-105 ml-4 cursor-pointer`}
              >
                Maria Khan
              </span>
            </div>

            {/* Hamburger Button - Small Screens */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white text-3xl absolute left-4 top-5"
            >
              <MdMenu />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, color: "#f3a136" }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-300"
                >
                  <item.icon className="w-5 h-5" />
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CV Download Button - Desktop Only */}
            <a href="/cv/cv.pdf" download="CV.pdf" className="hidden md:block">
              <button className="inline-flex text-white items-center bg-indigo-900 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">
                Download CV
                <MdOutlineFileDownload className="text-xl ml-2" />
              </button>
            </a>
          </div>
        </header>
      </div>

      {/* Mobile Full Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            <MdClose />
          </button>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-6 text-white text-lg text-center">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2 hover:text-gray-300 transition duration-300"
              >
                <item.icon className="w-6 h-6" />
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile CV Button */}
            <a
              href="/cv/cv.pdf"
              download="CV.pdf"
              onClick={() => setMenuOpen(false)}
            >
              <button className="mt-6 text-white items-center bg-indigo-900 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-base">
                Download CV
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
