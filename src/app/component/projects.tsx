import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id="project">
        <section className="bg-indigo-100 text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
       {/* { Project} */}

      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/pictures/calculatorproject.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Calculator Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Calculator
            </h1>
            <p className="leading-relaxed">
              This is the Project I have made during Learning Typescript.
            </p>
            <Link target="_blank" href={"https://mariakhan10.github.io/Calculator-App/"}>
            <p className="leading-relaxed text-blue-500 hover:underline ">
              View project
            </p>
            </Link>
          </div>
        </div>
      </div>





{/* { Project} */}

<div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/pictures/coffeeshop.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Coffee Shop Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Coffee Shop
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam aspernatur maiores illum pariatur ratione placeat itaque omnis blanditiis est natus laborum quas sunt consectetur sint et sed autem, nobis odit dolore eligendi? Labore ipsum facilis, quidem voluptatem numquam consequuntur quasi quaerat enim expedita architecto?
            </p>
            <Link target="_blank" href={"https://mariakhan10.github.io/Coffee-Shop-Website/"}>
            <p className="leading-relaxed text-blue-500 hover:underline ">
              View project
            </p>
            </Link>
          </div>
        </div>
      </div>



{/* { Project} */}

<div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/pictures/calculatorproject.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Calculator Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Calculator
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam aspernatur maiores illum pariatur ratione placeat itaque omnis blanditiis est natus laborum quas sunt consectetur sint et sed autem, nobis odit dolore eligendi? Labore ipsum facilis, quidem voluptatem numquam consequuntur quasi quaerat enim expedita architecto?
            </p>
            <Link target="_blank" href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline ">
              View project
            </p>
            </Link>
          </div>
        </div>
      </div>






     
    </div>
  </div>
</section>

    </div>
  )
}

export default Project