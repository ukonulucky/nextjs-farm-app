"use client"
import Link from 'next/link'
import React from 'react'
import {CiSettings}  from "react-icons/ci"
import {FaGlobeAsia} from "react-icons/fa"
import {IoPersonCircle} from "react-icons/io5"
import {BiLogIn} from "react-icons/bi"
import {RiArrowRightSLine} from "react-icons/ri"
import {SlCalender} from "react-icons/sl"
import {useRouter} from "next/navigation"

import {IoMdNotificationsOutline} from "react-icons/io"
function Page() {
const router = useRouter()

  return (
    <div className={`{styles.header}`}>
           {/* header start*/}
         <div className={`flex justify-between pl-[15px] pr-[15px] py-8 items-center   bg-[#B9E7B8]`}>
          <h2 className='text-white font-[900]
          text-[30px]
          md:text-[48px] track leading-56px tracking-wide'>DAISY FARMS
          <span className='rounded-full w-[10px]
          h-[10px] roundItem'></span></h2>
          <div className='sm:flex items-center gap-x-6 text-bold text-white font-normal text-[18px] md:text-[25px] leading-[56px] tracking-[0.1em] flex-1 justify-end hidden '>
           <Link
           href="/"
           >
           Home

           </Link>
           <Link
             href="/about"
           >
           About
           </Link>
           <Link
             href="/signup"
           >
           Sign Up
           </Link>
           <Link
             href="/login"
           >
           Login
           </Link>
           <Link
             href="/contact"
           >
           Contact
           </Link>
          </div>
        </div>
        {/* header end*/}
        <div className="bg-white  flex flex-col gap-y-6 mt-8">
          <div className='flex gap-x-4 pl-4 items-center'>
            <CiSettings color="rgba(0, 0, 0, 0.5)" size='20px' /> 
            <span classame="text-[2.5rem] font-bold text-black">Setting</span>
          </div>
           <div className='flex gap-x-4 pl-4  items-center'>
            <IoPersonCircle color="rgba(0, 0, 0, 0.5)" size="20px" /> 
            <span classame="text-[2.5rem] font-bold text-black">Edit Profile</span>
          </div> 
            <div className='flex gap-x-4 pl-4  items-center'>
            <IoMdNotificationsOutline color="rgba(0, 0, 0, 0.5)" size="20px" /> 
            <span classame="text-[2.5rem] font-bold text-black">Notification</span>
          </div>  
            <div className='flex gap-x-4 pl-4  items-center'>
            <FaGlobeAsia color="rgba(0, 0, 0, 0.5)" size="20px" /> 
            <span classame="text-[2.5rem] font-bold text-black">Investment</span>
          </div>  
            <div className='flex gap-x-4 pl-4  items-center'>
            <SlCalender color="rgba(0, 0, 0, 0.5)" size="20px" /> 
            <span classame="text-[2.5rem] font-bold text-black" onClick={() => {
              router.push("/AgricTech")
            }}>Transaction History</span>
          </div>  
          
          <span className='block bg-gray-400 h-1'></span>
          <div className="bg-white  flex flex-col gap-y-6 mt-8">
          <div className='flex gap-x-4 pl-4  items-center'>
            <span classame="text-[2.5rem] font-bold text-black" onClick={() => {
              Router.push("/")
            }}>Support</span>
            <RiArrowRightSLine color="rgba(0, 0, 0, 0.5)" size="20px" /> 
          </div> 
          <div className='flex  gap-x-2 pl-4  items-center'>
            
            <span classame="text-[2.5rem] font-bold text-black">Dark mode</span>
          </div> 
            <div className='flex pl-4  gap-x-4 items-center'>
            <BiLogIn color="rgba(0, 0, 0, 0.5)" size="20px" /> 
            <span classame="text-[2.5rem] font-bold text-black">Log Out</span> 
          </div>
           
          </div>
        </div>
    
      
        <div className='bg-[#2CCF29] '>
        <span className='w-full bg-white h-1 border-0 block mt-12 '></span>
        <div className='flex sm:flex-row flex-col justify-evenly pt-12 pb-12 pl-4 sm:pl-0 gap-y-6 sm:gap-y-0'>
          <div className='flex text-[15px] font-light text-white flex-col gap-y-6 capitalize'>
            <h2 className="text-[30px] font-bold ">Company</h2>
            <Link
              href="/company">
             about use
            </Link>
            <Link
              href="/store"
            >
             store location
            </Link>
            <Link
              href="/contact"
              >
             contact us
            </Link>
          </div>
          <div className='flex text-[15px] font-light text-white flex-col gap-y-6 capitalize'>
          <h2 className='text-[30px] font-bold'>Follow Us</h2>
          <Link
            href="/facebook"
          >
             facebook
            </Link>
            <Link
              href="/instagram"
            >
             instagram
            </Link>
            <Link
              href="/twitter"
            >
             twitter
            </Link>
          </div>
          <div className='flex text-[15px] font-light text-white flex-col gap-y-6 capitalize'>
          <h2 className='text-[30px] font-bold'>Quick Links</h2>
          <Link
          href="/privacy"
          >
             Privacy Policy
            </Link>
            <Link
              href="/terms"
              >
             Terms and condition
            </Link>
            <Link
              href="/faq"
            >
             FAQS
            </Link>
          </div>
        </div>
        <span className='w-full bg-white h-1 border-0 block mt-12 mb-12 '></span>
        <p className='text-white mt-[30px] mb-[30px] font-[700] ml-[30px] text-[20px]'>
        All rights reserved. Copyright 2022.
        </p>
        </div>

    </div>
  )
}

export default Page