import React from 'react'
import Link from 'next/link'
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5"
import { DiCss3 } from "react-icons/di";

const About = () => {
  return (
    <div className='bg-slate-300'>

<section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
        About me
     
      </h1>
      <p className="w-80  animate-pulse text-gray-950   mb-8 leading-relaxed  ">
        I am RomeshaShahaid ,a frontend developer with expertiesin HTML,CSS,JavaScript,Next.js, or Tawilwind CSS.
        I craft responsive ,user-friendly wesiteand applications, with a poassion  for  problemsolving 
        following next collaboration.Always learing, 
        I stay update industry trend  to deliver high-quality solution!
      </p>
      <div className="flex justify-center">

      <Link  href="http://127.0.0.1:5500/">
       <button   className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">
         Veiw CV 
      
    </button>
    </Link>
      </div>
    </div>
   
  </div>
<div className='justify-self-center'>
  <h1 className='text-4xl font-extrabold'>Skills</h1>
  <ul className='justify-items-center hover:animate-spin ' >

    
    <li><BiLogoTypescript className='bg-blue-400 text-white' /></li>
    <br />
    <li><FaReact className='bg-white text-red-400 ' /></li>
    <br />
    <li><IoLogoJavascript  className='bg-white text-yellow-300 h-auto w-auto' /></li>
    <br />
    <li><IoLogoHtml5   className='bg-orange-300 text-white h-auto w-auto'/></li>
    <br />
    <li><DiCss3  className='bg-blue-500 text-white h-auto w-auto' /></li>
    
  </ul>
</div>

</section>


    </div>
  )
}

export default About