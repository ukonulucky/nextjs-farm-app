"use client"
import Link from "next/link";
import React from "react";
import styles from "./styles/page.module.css";
import AgroCard from "@/components/agroCard";
import { agroData, agroData2 } from "@/utils/data";
import {useRouter} from "next/navigation"

function AgricTech() {
  const router = useRouter()
  return (
    <div>
      {/* header */}
      <div className={`${styles.header}`}>
        <div
          className={`flex justify-between pl-[15px] pr-[15px]  items-center h-[50px] pt-8 `}
        >
          <h2
            className="text-white md:font-[900] md:text-[48px] md:leading-56px tracking-wide flex items-end text-[35px] leading-35px"
            onClick={() => {
              router.push("/");
            }}
          >
            DAISY FARMS
            <div className="w-2 h-2 rounded-full bg-white mb-6"></div>
          </h2>

          <div className="hidden md:flex items-center gap-x-6 text-bold text-white font-normal md:text-[25px] md:leading-[56px] leading-[35px] tracking-[0.1em] flex-1 justify-end text-[18px] ">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/">Sign Up</Link>
            <Link href="/Settings">Login</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="flex-1 flex flex-col mt-12 md:mt-0 justify-center gap-y-8 items-start pl-12">
          <div className="flex flex-col gap-x-6 text-[#2CCF29] items-start text-[35px] md-text-[54px] leading-[75px] tracking-wider font-[600] md-font-[800]">
            <h2>Secure Your Future With Crop </h2>
            <h2>Investment</h2>
          </div>
          <div>
            <p className="text-white font-[700] text-[25px] md:text-[32px] leading-[38px] tracking-wide w-4/5 md-w-2/5 text-start">
              Invest in crops anywhere in Nigeria and get a monthly profit from
              your farming investment. Your investment is guaranteed to yield
              profit. Daisy farms ensure all investors are treated with honor
              and all farm are tended to daily. You are free to inspect your
              crops anytime.
            </p>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="w-full grid grid-col-2 md:grid-cols-3  gap-8 mb-24 pl-8 pr-8 mt-8">
        {agroData.map((i) => (
          <AgroCard key={i.key} img={i.img} heading={i.heading} />
        ))}
      </div>
      <p
        className="cursor-pointer  m-auto text-black border-solid border-2 border-[#2CCF29]
        text-[30px] flex items-center justify-center pr-12 pl-12 pt-6 pb-6 w-max font-[700]
        rounded-lg"
      >
        Loading....
      </p>
      <p
        className="text-[20px] text-black capitalize
   mb-[30px] mt-24 p-8 font-bolder "
      >
        You may also be interested
      </p>
      <div className="grid grid-col-2  md:grid-cols-3 gap-8 margin-auto pl-12 pr-12 mb-8">
        {agroData2.map((i) => (
          <AgroCard key={i.key} img={i.img} heading={i.heading} />
        ))}
      </div>

      <div className="bg-[#2CCF29]">
        <span className="w-full bg-white h-1 border-0 block mt-12 "></span>
        <div className="flex justify-evenly pt-12 pb-12">
          <div className="flex text-[15px] font-light text-white flex-col gap-y-6 capitalize">
            <h2 className="text-[30px] font-bold ">Company</h2>
            <Link href="/settings">about use</Link>
            <Link href="/agricTech">store location</Link>
            <Link href="/contact">contact us</Link>
          </div>
          <div className="flex text-[15px] font-light text-white flex-col gap-y-6 capitalize">
            <h2 className="text-[30px] font-bold">Follow Us</h2>
            <Link href="/facebook">facebook</Link>
            <Link href="/instagram">instagram</Link>
            <Link href="/twitter">twitter</Link>
          </div>
          <div className="flex text-[15px] font-light text-white flex-col gap-y-6 capitalize">
            <h2 className="text-[30px] font-bold">Quick Links</h2>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms and condition</Link>
            <Link href="/faq">FAQS</Link>
          </div>
        </div>
        <span className="w-full bg-white h-1 border-0 block mt-12 mb-12 "></span>
        <p className="text-white mb-[30px] font-[700] ml-[30px] text-[20px] mt-[30px]">
          All rights reserved. Copyright 2022.
        </p>
      </div>
    </div>
  );
}

export default AgricTech;
