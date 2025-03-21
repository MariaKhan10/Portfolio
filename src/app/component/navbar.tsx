"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import { Home, Info, Briefcase, Code, Mail } from "lucide-react";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({
  weight: ['400'], 
  subsets: ['latin'], 
  display: 'swap',
});

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "#about", icon: Info },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Projects", href: "#project", icon: Briefcase },
  { label: "Contact", href: "#Contact", icon: Mail },
];

const Navbar = () => {
  const navbarBackground = `linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(26, 25, 25, 1))`;

  return (
    <div className="z-50 sticky top-0">
      <div style={{ background: navbarBackground }} className="py-2 px-3 shadow-lg backdrop-blur-lg">
        <header className="body-font">
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            {/* Logo & Name */}
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <Image
                alt="logo"
                width={40}
                height={70}
                src="/pictures/logo3.png" 
                className="rounded-lg"// Fixing the Image Path
              />
           <span
  className={`${greatVibes.className} relative title-font text-2xl sm:text-5xl lg:text-3xl font-bold 
    bg-gradient-to-r from-[#f3a136] via-[#ff4e50] to-[#f9d423] text-transparent bg-clip-text 
    transition-all duration-500 ease-in-out hover:drop-shadow-[0_0_15px_#ff4e50] 
    hover:tracking-wide hover:scale-105 inline-block mt-2 ml-4 cursor-pointer`}
>
  Maria Khan
</span>


            </a>

            {/* Navbar Links */}
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-6">
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

            {/* Download CV Button */}
            <a href="/cv/cv.pdf" download="CV.pdf">
              <button className="inline-flex text-white items-center bg-indigo-900 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">
                Download CV
                <MdOutlineFileDownload className="text-xl ml-2" />
              </button>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
