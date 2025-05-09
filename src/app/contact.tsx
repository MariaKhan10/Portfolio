import React from 'react'

const Contact = () => {
  return (
    <div id="Contact">
      <section className="white-600 body-font relative">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder={0}
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1724843218579!5m2!1sen!2s"
          style={{ filter: "contrast(1.2) opacity(0.4)" }}
        />
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/3 px-12">
            <h2 className="title-font font-semibold white-900 tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
            Karachi,Pakistan
            </p>
          </div>
          <div className="lg:w-1/2 px-9 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold white-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-red-900 leading-relaxed">khaanmaria110@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium white-900">
          Contact
        </h2>
        <p className="leading-relaxed mb-5 white-600">
          Feel Free to Contact
        </p>
        <form   action="https://formspree.io/f/mldenjvj"
  method="POST">
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm white-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm white-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="subject" className="leading-7 text-sm white-600">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>


        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm white-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none white-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""} required
          />
        </div>
        <button className="text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Send Message
        </button>
        </form>
        
      </div>
    </div>
  </section>
  </div>
  )
}

export default Contact