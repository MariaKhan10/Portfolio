"use client";
import React from "react";
import { motion } from "framer-motion";

const Certification = () => {
  const gradientBackground = `linear-gradient(135deg, #000000, #1a1a1a)`;

  const handleViewCertificate = (cert:any) => {
    window.open(`/pictures/${cert.replace('.png', '.pdf')}`, "_blank");
  };

  return (
    <div id="certifications">
      <section className="text-white body-font">
        <div style={{ background: gradientBackground }} className="py-20 px-8">
          <div className="container px-5 py-24 pt-4 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <motion.h2
                className="text-sm uppercase tracking-widest font-semibold mb-1 text-blue-200"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                Certifications
              </motion.h2>
              <motion.h1
                className="sm:text-3xl text-2xl font-bold title-font text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                My Certifications
              </motion.h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-center -m-3">
            {[
              "certificate1.png",
              "certificate2.png",
              "certificate3.png",
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="p-4 w-full md:w-1/2 lg:w-1/3 flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <img
                  className="w-full md:w-4/5 lg:w-3/4 object-cover object-center rounded -mt-6"
                  alt="certificate"
                  src={`/pictures/${cert}`}
                />
                <motion.button
                  className="mt-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: false, amount: 0.2 }}
                  onClick={() => handleViewCertificate(cert)}
                >
                  View
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
