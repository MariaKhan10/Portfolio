"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdOutlineFileDownload, MdMenu, MdClose } from "react-icons/md";
import { Great_Vibes } from "next/font/google";
import { Home, Info, Briefcase, Code, Mail } from "lucide-react";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
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
  const [scrolled, setScrolled] = useState(false); // ✅ inside component

  // ✅ scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-50 sticky top-0">
      {/* Clean Glass Navbar */}
      <div
        className={`py-4 px-6 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-black/70" : "bg-black/100"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* LOGO */}
          <span
            className={`${greatVibes.className} text-2xl font-semibold tracking-wide bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-transparent bg-clip-text`}
          >
            Maria Khan
          </span>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-gray-300 hover:text-white transition duration-300 text-sm tracking-wide cursor-pointer"
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <a href="/cv/cv.pdf" download="CV.pdf" className="hidden md:block">
            <button className="text-white text-sm px-5 py-2 rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] hover:scale-105 transition duration-300">
              Download CV
            </button>
          </a>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            <MdMenu />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            <MdClose />
          </button>

          <div className="flex flex-col space-y-8 text-white text-xl">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} onClick={() => setMenuOpen(false)}>
                <motion.div whileHover={{ scale: 1.1 }}>{item.label}</motion.div>
              </Link>
            ))}

            <a href="/cv/cv.pdf" download="CV.pdf">
              <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe]">
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