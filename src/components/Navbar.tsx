import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='bg-slate-100'>
        <header className="text-gray-600 body-font">
  <div  className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image  className="text-white  "   src="/rslogo.jpg" alt="image89jpg"width={60} height={45} />
      <span className="ml-3 text-xl">Myfirestportfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href ={"/"} className="mr-5 hover:text-sky-500">Home </Link>
      <Link href={"/contact "} className="mr-5 hover:text-sky-500">Contact </Link>
      <Link href={"/about" }className="mr-5 hover:text-sky-500">About </Link>
      <Link href={"/project"} className="mr-5 hover:text-sky-500">Project </Link>
      
    </nav>
       <a href="http://127.0.0.1:5500/">
       <button   className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">
        download CV 
      <FiDownload  className='text-xl ml-2'/>
      
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar