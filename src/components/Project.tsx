import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='bg-slate-300 '>
     
<section>
  <div className="container px-5 py-24 mx-auto" >
      <div className="p-4 ms:w-3/1">
    
       
          <div className="p-4">
          <Image   src="/website.jpg" alt="image89jpg"width={500} height={300} />
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              bag website
            </h1>
            
          </div>
        </div>
        <div className="p-4 md:w-3/1">
       
          <div className="p-4">
          <Image   src="/resume.png" alt="image89jpg"width={400} height={600} />
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              bag website
            </h1>
            
          </div>
        </div>
        </div>
      
</section>
    </div>
  )
}

export default Project