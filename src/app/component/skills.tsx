"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const gradientBackground = `linear-gradient(135deg, #000000, #1a1a1a)`;

  return (
    <div id="skills">
      <section className="text-white body-font">
        <div style={{ background: gradientBackground }} className="py-20 px-8">
          <div className="container px-5 py-24 pt-4 mx-auto">
            <div className="flex flex-col text-center w-full mb-22">
              <motion.h2
                className="text-sm uppercase tracking-widest font-semibold mb-1 text-blue-200"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                Skills
              </motion.h2>
              <motion.h1
                className="sm:text-3xl text-2xl font-bold title-font text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                My Skills
              </motion.h1>
            </div>
          </div>

          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {[
              { name: "HTML/CSS", level: "100%" },
              { name: "Python", level: "95%" },
              { name: "TypeScript/JavaScript", level: "90%" },
              { name: "Next.js", level: "85%" },
              { name: "WordPress", level: "75%" },
              { name: "React", level: "60%" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 w-[100%] md:w-1/3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="flex rounded-lg h-full p-8 flex-col bg-gray-900 bg-opacity-40">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <h2 className="text-lg title-font font-medium text-white">
                      {skill.name}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                      <motion.div
                        className="absolute bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-xl"
                        initial={{ width: "0%" }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                      />
                    </div>
                    <p className="font-bold text-right text-white mt-2">
                      {skill.level}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
