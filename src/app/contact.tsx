"use client";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
           <motion.h1
    className="sm:text-4xl text-3xl font-bold"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <span className="bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#00d4ff] text-transparent bg-clip-text">
      Get In Touch
    </span>
  </motion.h1>

  {/* Divider */}
  <div className="w-24 h-[3px] mx-auto mt-4 mb-10 bg-gradient-to-r from-[#4facfe] to-transparent"></div>

         

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to
            contact me anytime. I’d love to hear from you.
          </p>
        </div>

        {/* Main Card */}
        <div className="grid lg:grid-cols-2 gap-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left Side */}
          <div className="p-10 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-pink-500/10 to-purple-500/10">
            <h3 className="text-3xl font-semibold mb-6">
              Let’s Talk
            </h3>

            <p className="text-gray-300 leading-relaxed mb-10">
              Whether you need a modern website, portfolio, or full-stack
              project, I’m available for freelance work and collaborations.
            </p>

            <div className="space-y-8">
              
              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-lg font-medium">
                    khaanmaria110@gmail.com
                  </p>
                </div>
              </div>

           

              {/* Location */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-lg font-medium">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-10 lg:p-14">
            <form
              action="https://formspree.io/f/mldenjvj"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-pink-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-pink-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Enter subject"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-pink-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Write your message..."
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-pink-500 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white text-lg px-5 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] hover:scale-105 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;