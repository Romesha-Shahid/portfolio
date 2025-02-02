import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-slate-300'>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image src={"/prog.jpg"} alt='hreo' width={300} height={300}  />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am  
        <hr />
        UI/XI Designer
    

        
      </h1>
      <p className="mb-8 leading-relaxed">
      I am RomeshaShahaid ,a frontend developer with expertiesin HTML,CSS,JavaScript,Next.js, or Tawilwind CSS.
        I craft responsive ,user-friendly wesiteand applications, with a poassion  for problemsolving following next 
        collaboration.Always learing, I stay update with industry trend  to deliver high-quality solution!
      </p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero