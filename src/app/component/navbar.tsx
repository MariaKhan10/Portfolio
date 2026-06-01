"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    menuOpen
      ? "bg-black"
      : scrolled
      ? "bg-black/40 backdrop-blur-xl shadow-lg"
      : "bg-black/90"
  }`}
>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-6">
        
        {/* LOGO */}
        <span
          className={`${greatVibes.className} text-xl sm:text-2xl bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-transparent bg-clip-text`}
        >
          Maria Khan
        </span>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <Link key={i} href={item.href}>
              <motion.span
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white text-md cursor-pointer"
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* CV BUTTON */}
        <a href="/cv/cv.pdf" download className="hidden md:block">
          <button className="text-white text-sm px-5 py-2 rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] hover:scale-105 transition">
            Download CV
          </button>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-3xl"
        >
          <MdMenu />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
      <div className="fixed inset-0 z-[999] bg-black backdrop-blur-xl flex flex-col items-center justify-center">
          
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-white text-4xl"
          >
            <MdClose />
          </button>

          <div className="flex flex-col gap-7 text-white text-lg text-center">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  {item.label}
                </motion.div>
              </Link>
            ))}

            <a href="/cv/cv.pdf" download>
              <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe]">
                Download CV
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;