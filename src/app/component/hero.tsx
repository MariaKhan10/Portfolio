"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const gradientBackground = `linear-gradient(135deg, #000000, #1a1a1a)`; // Black gradient

  return (
    <section className="text-white body-font">
      <div style={{ background: gradientBackground }} className="py-29">

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Maria Khan", "Front-End Developer", "Botanist", "Web Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[400px] h-[2px] bg-blue-700"></div>
            <p className="mb-8 leading-relaxed text-white mt-2">
              Passionate and detail-oriented Frontend Developer with a strong
              background in HTML, CSS, TypeScript/JavaScript and Next.js. Skilled at
              transforming design concepts into engaging and user-friendly
              interfaces that enhance the overall user experience. Continuously
              staying side by side of industry trends and emerging technologies to
              deliver cutting-edge solutions. Committed to creating visually
              appealing and functional websites that exceed client expectations.
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-3/6">
          <Image
  className="object-cover object-center rounded-full mx-auto w-[18rem] h-[18rem] shadow-2xl border-4 border-blue-600"
  alt="hero"
  width={288} // Same as w-[18rem] in Tailwind (1rem = 16px)
  height={288} // Same as h-[18rem] in Tailwind
  src={require("../../../public/pictures/aboutmepic.jpg")}
  style={{
    filter: "none", // Remove blur filter
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add proper shadow
  }}
  priority // To load the image in high quality
/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
