import Image from 'next/image'
import React from 'react'

function Card({text,img,heading,myClass}) {
  return (
    <div className={`flex  items-start gap-y-12 md:items-center ${myClass}`}>
          <Image
          src={img}
          alt="logg"
        width={400}
        height={500}
           />
           <div className="flex flex-col items-start gap-y-6 justify-start height-[421px] width-[409]">
   
   <h2 className="text-[35px] md:text-[40px] leading-[48px] text-start font-700 text-black ">{heading}</h2> 
   <p className="text-gray-400 font-[100] text-[18px] leading-[32px]">
     {text}
   </p>
   <button
     className="bg-white rounded-xl text-[#00A451]  flex items-center
     justify-center font-light
   text-[16px] leading-[22px] w-[175px] h-[48px]
   border-solid border-green-400 border-2 cursor-pointer
   "
   >
     Invest Now
   </button>
 </div>
    </div>
  )
}

export default Card