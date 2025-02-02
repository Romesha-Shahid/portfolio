import React from 'react'
import Link from 'next/link'
import { AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  return (
    <div className='bg-slate-200 '>
<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
       I am here so please connect  me 
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder='Name'
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='Email'
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder='Message'
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300 flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-400 rounded text-lg">
            Send me Message
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">romeshashahid@gmail.com</a>
          <br />
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    
    <Link
    target='_blank' 
    href=
    {"https://wa.me/message/MH3EEOY4VK6OM1"}
    >
    
     
    <AiOutlineWhatsApp  className='bg-white-500 text-green-600 text-3xl rounded-xl'/>


    </Link>

     
     
      
    </span>

        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Contact