import React from 'react'
import Image from 'next/image'
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-slate-100'>


<footer className=" text-gray-600 body-font ">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    
    
    <Image   src="/logo.nav.jpg" alt="image89jpg"width={20} height={10} />
    
    <p className="-sm text-blue-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black-400 sm:py-2 sm:mt-0 mt-4 hover:animate-spin">
      © 2024  @ romeshashahid
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    
    <Link
    target='_blank' 
    href=
    {"https://wa.me/message/MH3EEOY4VK6OM1"}
    >
    
     
    <AiOutlineWhatsApp  className='bg-white-500 text-green-600 text-4xl rounded-xl'/>


    </Link>

     
     
      
    </span>
  </div>
</footer>



    </div>
  )
}

export default Footer