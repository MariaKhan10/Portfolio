"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-white body-font bg-black py-20 px-6">
        
        <div className="container mx-auto">

          {/* Heading */}
          <div className="flex flex-col text-center w-full mb-16">
            <motion.h2
              className="text-sm uppercase tracking-widest font-semibold mb-2 text-[#4facfe]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Skills
            </motion.h2>

            <motion.h1
              className="sm:text-4xl text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#00d4ff] text-transparent bg-clip-text">
                My Skills
              </span>
            </motion.h1>

            {/* Divider */}
            <div className="w-24 h-[3px] mx-auto mt-4 bg-gradient-to-r from-[#4facfe] to-transparent"></div>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap -m-4">
            {[
              { name: "Python", level: "90%" },
              { name: "FastAPI", level: "85%" },
              { name: "Next.js", level: "85%" },
              { name: "TypeScript/JavaScript", level: "85%" },
              { name: "Prompt Engineering", level: "85%" },
              { name: "OpenAI Agents SDK", level: "80%" },
              { name: "Docker", level: "75%" },
              { name: "React", level: "75%" },
              { name: "HTML/CSS", level: "80%" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 w-full md:w-1/3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Glass Card */}
                <div className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]">

                  {/* Title */}
                  <div className="flex items-center mb-4">
                    <div className="w-9 h-9 mr-3 flex items-center justify-center rounded-full bg-gradient-to-r from-[#21639c] to-[#022729] text-black font-bold">
                      ⚡
                    </div>
                    <h2 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h2>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 w-full bg-white/10 rounded-xl overflow-hidden">
                    <motion.div
                      className="absolute h-2 rounded-xl bg-gradient-to-r from-[#042c4e] to-[#108d96] shadow-[0_0_10px_rgba(0,212,255,0.7)]"
                      initial={{ width: "0%" }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1 }}
                    />
                  </div>

                  {/* Percentage */}
                  <p className="text-right mt-2 text-sm text-gray-300">
                    {skill.level}
                  </p>
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