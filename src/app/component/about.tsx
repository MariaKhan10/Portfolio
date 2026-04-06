import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-white body-font bg-gradient-to-br from-black via-[#0a0a0a] to-[#111] py-20 px-6">

        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center gap-10">

          {/* IMAGE SIDE */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center">

            {/* Glass Image Card */}
            <div className="bg-cyan-600 backdrop-blur-xl rounded-2xl p-1">
              <Image
                className="object-cover object-center rounded-xl w-[300px] h-[350px] transition-transform duration-500 hover:scale-105"
                alt="about"
                src={require("../../../public/pictures/aboutmepic2.jpg")}
                width={500}
                height={500}
                style={{
                  filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                }}
              />
            </div>

          </div>

          {/* TEXT SIDE */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">

            {/* Glass Text Card */}
            <div className="bg-black/5 backdrop-blur-xl rounded-2xl p-8">

              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold">

                {/* Gradient Heading */}
                <span className="bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#00d4ff] text-transparent bg-clip-text">
                  About Me
                </span>

              </h1>

              {/* Divider */}
              <div className="w-24 h-[3px] bg-gradient-to-r from-[#4facfe] to-transparent mb-6"></div>

              <p className="mb-5 leading-relaxed text-gray-300">
                I'm Maria Khan, an Agentic AI and Full Stack Developer focused on building AI-native, cloud-ready, and spec-driven applications. I design and develop end-to-end systems using Next.js, FastAPI, and modern databases while integrating LLM-powered automation and intelligent agent workflows.
              </p>

              <p className="mb-6 leading-relaxed text-gray-400">
                My expertise includes building RAG-based systems, AI task automation platforms, and cloud-native applications deployed with Docker and Kubernetes. I enjoy architecting production-ready solutions that bridge artificial intelligence with real-world use cases.
              </p>

              {/* Tech Stack Highlight */}
              <p className="mb-6 text-sm text-gray-400">
                <span className="text-[#4facfe] font-medium">Tech Stack:</span> Python, FastAPI, Next.js, TypeScript, PostgreSQL, Qdrant, OpenAI Agents SDK, Docker, Kubernetes
              </p>

              {/* Button */}
              <a href="/cv/cv.pdf" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center text-white 
                bg-cyan-600/90 py-2 px-8 rounded-xl text-lg font-medium
                transition-all duration-300 
                hover:bg-cyan-500 hover:scale-105 
                hover:shadow-[0_0_20px_rgba(0,212,255,0.7)]">
                  View CV
                </button>
              </a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;