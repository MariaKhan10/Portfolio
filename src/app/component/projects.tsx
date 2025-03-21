"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div id="project">
      <section className="bg-[linear-gradient(135deg,#000000,#1a1a1a)] text-gray-200 body-font">
        <div className="container px-5 py-24 mx-auto">
        <motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="flex flex-col text-center w-full mb-20"
>
  <motion.h1
    className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
    whileHover={{
      scale: 1.05,
      textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
    }}
  >
    My Projects
    <br />
  </motion.h1>
  <motion.h2
    className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray underline"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
  >
    Tap/Click Any Project to View Live
  </motion.h2>
</motion.div>

          <br />
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* { Project 1 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} // 👈 yeh ensure karega ke scroll pe chale
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/foodtuck.png")}
                />
                <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Hackathon Market Place Food Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    A Restaurant Based Food Delivery Website built with Next.js
                    and Sanity.
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    This is the Project I have made during Hackathon Challenge
                    in Governor House.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://ui-ux-hackathon-q2.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 2 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/coffeeshop.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Coffee Shop Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Coffee Shop
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Start your day right with a cup of our freshly brewed
                    coffee.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://coffee-shop-website-eight.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 3 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/blogweb.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Blog Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Blog
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    This is the Blog Website related to Real World Modern
                    Technologies. I have made this using Next.js during
                    Hackathon at Governor House.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://blog-website-next-js-red.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 4 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/EveningDresses.png")}
                />
                <div className="px-10 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Royal Attire Fashion Webpage
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Evening Gowns Webpage
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    This is the Mini Project I have made during Learning
                    Next.js.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://multi-page-website-next-js.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 5 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/staticresume.png")}
                />
                <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Static Resume
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Static Resume Built with Html, CSS, and JavaScript.
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    This is the Mini Project I have made during Learning HTML,
                    CSS.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://hackathon-milestone-1-plum.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 6 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/resumebuilder1.png")}
                />
                <div className="px-8 py-9 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Dynamic Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CV Builder
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Generates a unique URL for each resume based on the user’s
                    username and allows the resume to be shared and downloaded.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://hackathon-milestone5-mu.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 7 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/unit.png")}
                />
                <div className="px-6 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Unit Convertor
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Unit + Currency Covertor Web App (Python + Streamlit)
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Unit Converter is a simple tool designed to convert various
                    units seamlessly.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://mariakhan10-project-01-unit-convertor-vhxxd6.streamlit.app/"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 8 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/csvtoexcel.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Smart Data Sweeper
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    File Transfer-Csv to Excel (Python + Streamlit)
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Data Sweeper is a tool designed to seamlessly convert CSV
                    files to Excel.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://mariakhan10-python-ai-app-mel8mu.streamlit.app/"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 9 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/library.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Library Manager
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Personal Library Manager (Python + UV + Streamlit)
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Personal Library Manager that allows users to manage their
                    book collection.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://mariakhan10-library-manager-library-manager-obvkpm.streamlit.app/"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 10 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/countdowntimer.png")}
                />
                <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    CountDown Timer
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Countdown Timer Built with Next.js
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Countdown Timer application allows users to set a time
                    duration and track time.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://countdowntimer-theta.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 11 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/calculatorproject.png")}
                />
                <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Calculator Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Calculator
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    This is the Mini Project I have made during Learning
                    TypeScript.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://calculator-app-jet-omega.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 12 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/fooddeliverywebpage.png")}
                />
                <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Food Delivery Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Simple Food Delivery Landing Page
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    This is the Mini Project I have made during Learning HTML,
                    CSS.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://food-delivery-webpage-seven.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 13 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/Weatherapp.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Weather Widget App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Weather App
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    This is the Mini Project I have made during Learning Next.js
                  </p>
                  <Link
                    target="_blank"
                    href={"https://weather-widget-next-js-lyart.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 14 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/NumberGuessing.png")}
                />
                <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Number Guessing Game
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Mini Next.js Number Guessing Game App
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Number Guessing Game application allows users to: Start,
                    pause, and guess the number. Try again, and see the number
                    of guess attempts.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://number-guessing-game-next-js.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 15 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/moodtracker.png")}
                />
                <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Mood Tracker App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    A Mood Tracker App built with (Python + Streamlit)
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    This is the Mini Project I have made during Learning Python,
                    UV, and Streamlit.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://mariakhan10-mood-tracker-main-msve8z.streamlit.app/"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* { Project 16 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/passwordstrength.png")}
                />
                <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Password Strength Meter App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    A Password Strength Meter built with (Python + Streamlit)
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Built a Password Strength Meter in Python that evaluates a
                    user's password based on security rules. The program will:
                    Analyze passwords based on length, character types, and
                    patterns. Assign a strength score (Weak, Moderate, Strong).
                    Provide feedback to improve weak passwords.
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://mariakhan10-project-02-main-2e4jqo.streamlit.app/"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>
            {/* { Project 17 } */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.5)",
                scale: 1.02,
              }}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/quiz.png")}
                />
                <div className="px-8 py-6 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Quiz App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    A Simple Quiz App built with (Python + Streamlit)
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Built a Quiz Application using Python, Streamlit, and UV.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://quiz-application-python.streamlit.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
