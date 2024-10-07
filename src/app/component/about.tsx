import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const rgbColor = `rgb(40, 44, 50)`;
  return (
    <div id="about">
      <section className="bg-gray-300 text-gray-600 body-font">
      <div style={{ backgroundColor: rgbColor }}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={require("../../../public/pictures/aboutmepic2.jpg")}
              width={500}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium white-900 text-white">
              About Me
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-5 leading-relaxed text-white">
              I'm Maria Khan, a passionate front-end developer with a strong
              foundation in web technologies. I specialize in crafting engaging
              and user-friendly interfaces using HTML, CSS, TypeScript, and
              Next.js. With a keen eye for design and a love for coding, I
              strive to create seamless digital experiences that resonate with
              users. I'm dedicated to continuously learning and growing in this
              ever-evolving field to deliver innovative solutions. Let's build
              something amazing together!
            </p>
            <p className="mb-5 leading-relaxed text-white">
              Key Skills : Proficient in HTML, CSS, TypeScript.Experience with
              front-end frameworks such as React and Next.js. Strong eye for
              design and aesthetics Excellent problem-solving and debugging
              skills.Commitment to delivering high-quality user experiences.
              Ability to collaborate effectively with cross-functional teams.
              Developed and implemented responsive web designs that
              optimized user interaction and engagement.
              Ensured cross-browser compatibility and responsive design across
              various devices.On the Basis of my Education I hold
              Master's Degree in Science from Karachi University.
            </p>
            <div className="flex justify-center">
            <a href="/cv/cv.pdf" target="_blank" rel="noopener noreferrer">
  <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
    View CV
  </button>
</a>
            </div>
          </div>
        </div>
        </div>
      </section>
      
    </div>
    
  );
};

export default About;
