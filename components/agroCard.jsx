import Image from 'next/image'
import React from 'react'


function AgroCard({img,heading,key}) {
  return (
    <div key={key} className='flex flex-col items-center justify-start'>
        <Image 
        alt="crop"
        src={img}
        width={450}
        height={400}
        intrinsic={true}
        />
  
        <h2>{heading}</h2>
        <button className='rounded-xl text-[20px] text-[#2CCF29]
] '>
            Invest Now
        </button>

    </div>
  )
}

export default AgroCard