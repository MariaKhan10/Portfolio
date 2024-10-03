import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-blue-50'> 
        <footer className="white-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center white-900">
    <Image
              alt="image"
              width={50}
              height={100}
              src={require("../../../public/pictures/logofrontend.jpg")}
            />
      <span className="ml-3 text-xl">Maria Khan</span>
    </a>
    <p className="text-sm white-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Maria Khan 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target="_blank" href="https://www.instagram.com/khan__mariah?igsh=MXBqbGJzcjl0OW5rMQ=="className="ml-3 white-500">
      <FaInstagram className='text-2xl hover:text-[#e4405f]' />
      </Link>
      <Link target="_blank" href="https://github.com/MariaKhan10"className="ml-3 white-500">
      <FaGithub className='text-2xl hover:text-[#55acee]' />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/mariakhan10/"className="ml-3 white-500">
      <FaLinkedin className='text-2xl hover:text-[#0077b5]' />
      </Link>
      <Link target="_blank" href="https://www.facebook.com/profile.php?id=100003139598578&mibextid=ZbWKwL" className="ml-3 white-500">
      <FaFacebook className='text-2xl hover:text-[#3b5999]'/>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer