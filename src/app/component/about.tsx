import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const gradientBackground = `linear-gradient(135deg, #000000, #1a1a1a)`; // Matching black gradient
  
  return (
    <div id="about">
      <section className="text-white body-font">
        <div style={{ background: gradientBackground }} className="py-18 px-8">

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg mx-auto w-[300px] h-[350px] shadow-2xl border-4 border-blue-600"
              alt="hero"
              src={require("../../../public/pictures/aboutmepic2.jpg")}
              width={500}
              height={500}
              style={{
                filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)", // Adding a soft shadow
              }}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium white-900 text-white">
              About Me
              <br className="hidden lg:inline-block" />
            </h1>
         <p className="mb-5 leading-relaxed text-white">
  I'm Maria Khan, an Agentic AI and Full Stack Developer focused on building AI-native, cloud-ready, and spec-driven applications. I design and develop end-to-end systems using Next.js, FastAPI, and modern databases while integrating LLM-powered automation and intelligent agent workflows.
  
  Currently enrolled in PIAIC and GIAIC, I specialize in developing scalable applications that combine frontend excellence with backend architecture and AI orchestration.
</p>

<p className="mb-5 leading-relaxed text-white">
  My expertise includes building RAG-based systems, AI task automation platforms, and cloud-native applications deployed with Docker and Kubernetes. I enjoy architecting production-ready solutions that bridge artificial intelligence with real-world use cases.
  
  Tech Stack: Python, FastAPI, Next.js, TypeScript, PostgreSQL, Qdrant, OpenAI Agents SDK, Docker, Kubernetes.
</p>
            <div className="flex justify-center">
            <a href="/cv/cv.pdf" target="_blank" rel="noopener noreferrer">
  <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
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
