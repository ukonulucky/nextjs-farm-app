"use client"
import Image from "next/image";
import {useRouter} from "next/navigation"
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

import star from "../public/star.svg";

import { BsFacebook } from "react-icons/bs";
import logo from "../public/logo.svg";
import land from "../public/Rectangle457.svg";
import good from "../public/good.svg";
import ellipse3 from "../public/ellipse3.svg";
import ellipse4 from "../public/ellipse4.svg";
import ellipse5 from "../public/ellipse5.svg";
import ellipse6 from "../public/ellipse6.svg";
import ellipse7 from "../public/ellipse7.svg";
import ellipse8 from "../public/ellipse8.svg";
import { data } from "@/utils/data";
import Card from "@/components/card";

export default function Home() {
  const router = useRouter()
  const dataComp = data.map((i) => (
   <div key={i.id} className=" w-3/4 md:w-3/5 mx-auto ">
     <Card
      text={i.text}
      heading={i.heading}
      myClass={i.myClass}
      img={i.img}
    />
   </div>
  ));
  const listArray = [
    {
      id: 1,
      text: "develop sustainable human settlement",
    },
    {
      id: 2,
      text: "Create an economically integrated community",
    },
    {
      id: 3,
      text: "Stimulate economic activity through agriculture and Food Processing.",
    },
    {
      id: 4,
      text: "Empower the community through training and skills development in Food.",
    },
    {
      id: 5,
      text: "Processing and Preservation.",
    },
    {
      id: 6,
      text: "Integrating Cutting Edge Technology and Innovations in Agriculture.",
    },
  ];
  const listItem = listArray.map((i) => (
    <div className="flex gap-x-4 items-center" key={i.id}>
      <div className="start">
        <Image src={star.src} fill={true} alt="start" />

        <Image
          src={good.src}
          alt="good"
          width={10}
          height={10}
          className="good"
        />
        {/* </span> */}
      </div>
      <span className="text-gray-500 font-light text-[12px] leading-[32px]">
        {i.text}
      </span>
    </div>
  ));

  return (
    <div className="w-full parent">
      <div className="header w-full flex flex-col">
        <div className="flex justify-around items-start  w-full ">
          <div className="flex gap-x-4 items-center pt-4 text-white capitalize font-[500] text-[16] cursor-pointer">
            <span onClick={() => {
              router.push("/AgricTech")
            }}>food</span>
            <span  onClick={() => {
             router.push("/Settings")
            }} className="cursor-pointer">Tech</span>
            <span>Homes</span>
          </div>
          <div className="hidden logo md:flex items-center justify-center ">
            <Image src={logo.src} alt="logo" width={80} height={80} />
          </div>
          <div className="flex gap-x-4 pt-4 items-center">
            <div className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center">
              <AiOutlineInstagram size={25} />
            </div>
            <div className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center">
              <BsFacebook size={25} />
            </div>
            <div className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center">
              <AiOutlineTwitter color="#3AB75D" size={25} />
            </div>
            <div className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center">
              <AiFillLinkedin size={25} />
            </div>
          </div>
          {/* navbar */}
        </div>

        <div className="flex flex-col gap-y-4 items-center justify-center font-[700] text-[35px] md:text-[64px] mt-12 md:mt-0 md:leading-[72px] text-center text-white  flex-1  w-2/3 m-auto">
          <p className="">
            Providing <span className="text-green-700">homes</span>
          </p>
          <p>
            <span className="text-green-700">settlement</span> for farmers &
          </p>
          <p>public servants</p>
          <p className="text-white text-center font-[100] text-[24px] leading-[32px] mt-8">
            A branch of Quebec groups dedicated to growing, processing healthy
            food products and providing affordable home settlement.
          </p>
        </div>
      </div>
      <div className="outer">
        <div className="flex flex-col items-start gap-y-4 pl-8">
          <h2 className="font-[700] text-[45px] md:text-[64px] leading-[72px] md:text-center text-left  text-white py-8 md:p-0 ">
            Over View
          </h2>
          <p className="text-white w-4/5 md:w-3/6 font-[100] text-[18px] leading-[32px] ">
            The Quebec Agri-tech City Project model is a future city, a mixed
            land-use development mixed income future Farm Estates that is
            passion driven by a team of Agriculture and Real Estate Experts,
            with the aim of investing in new generation dedicated farmers and
            Youths to address the following:
          </p>
          <div className="flex flex-col gap-x-8">{listItem}</div>
        </div>
        <div className="center2"></div>

        <div className="flex flex-col items-center gap-y-6 items">
          <div className="flex flex-col items-center gap-y-4">
            <h3 className="font-[700] text-[45px] md:text-[64px] leading-[72px] pt-12 text-start text-white" onClick={() => {
              navigate("/AgricTech")
            }}>
              Our Services
            </h3>
            <p className="text-white w-3/6 font-[100] text-[18px] leading-[32px]">
              We are a determined firm, envisioned to make a difference in small
              and large businesses as well as the general populace. the
              following are some of the services we offer.
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center md:items-start md:gap-x-12 gap-y-4 md:gap-y-0">
            <div className="flex flex-col items-start gap-y-6">
              <Image src={ellipse3.src} alt="agro" width={159} height={159} />

              <span className="font-[700] text-[32px] leading-[39px] text-[#001E0F] text-center ">
                Agicultural <br />
                Activities
              </span>
            </div>
            <div className="flex flex-col items-start gap-y-6">
              <Image src={ellipse5.src} alt="human" width={159} height={159} />

              <span className="font-[700] text-[32px] leading-[39px] text-[#001E0F] text-center ">
                Human <br />
                settlement
              </span>
            </div>
            <div className="flex flex-col items-start gap-y-6">
              <Image
                src={ellipse6.src}
                alt="infrastructure"
                width={159}
                height={159}
              />

              <span className="font-[700] text-[32px] leading-[39px] text-[#001E0F] text-center ">
                Infrastructure
              </span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center md:items-start md:gap-x-12 gap-y-4 md:gap-y-0">
            <div className="flex flex-col items-start gap-y-6">
              <Image
                src={ellipse7.src}
                alt="development"
                width={159}
                height={159}
              />

              <span className="font-[700] text-[32px] leading-[39px] text-[#001E0F] text-center ">
                Development <br />
                Strategy
              </span>
            </div>
            <div className="flex flex-col items-start gap-y-6">
              <Image
                src={ellipse8.src}
                alt="investment"
                width={159}
                height={159}
              />

              <span className="font-[700] text-[32px] leading-[39px] text-[#001E0F] text-center ">
                Investment <br />
                Offer
              </span>
            </div>
            <div className="flex flex-col items-start gap-y-6">
              <Image
                src={ellipse4.src}
                alt="investment"
                width={159}
                height={159}
              />

              <span className="font-[700] text-[32px] leading-[39px] text-[#001E0F] text-center ">
                Sustainability
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-ful md:w-1/2 items-center md:items-center h-max justify-center  margin-auto">
            <div className="flex flex-col items-start gap-y-6 justify-start w-1/2">
              <h2 className="text-[25px] md:text-[40px] leading-[30px]  md:leading-[48px] text-start font-700 text-white "
              onClick={() => {
                navigate("/Settings")
              }}>
                Real Estate - Land Investment Buyback Option Scheme
              </h2>
              <p className="text-white font-[100] text-[18px] leading-[32px]">
                The Land Investment with Buy-Back Option scheme {"{LLBB}"}, is
                an investment scheme that allows you to invest plots of land in
                Quebec Agritech City and hold it for a fixed duration 12 to 24
                months read more.
              </p>
              <button
                className="bg-white rounded-xl text-[#00A451]  flex items-center border-0
              justify-center font-light
            text-[16px] leading-[22px] w-[175px] h-[48px] mx-auto md:mx-0
            "
              >
                Download FAQ
              </button>
            </div>
            <div className="landPic">
              <Image
                src={land.src}
                height={200}
                width={300}
                className="hidden md:block w-1/2"
                alt="land"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-y-24 mt-8 mb-8 flex-col items-center  ">
        {dataComp}
      </div>
      <div className=" flex flex-col items-center gap-y-6 "></div>
      {/* footer section */}
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-0 md:m-auto w-full md:w-3/4 items-start gap-y-8 md:gap-y-0 md:items-center mt-12 mb-12 ">
        <Image src={logo.src} width={150} height={150} alt="logo" />
        <div>
          <p className="text-gray-500 font-light text-[12px] leading-[32px]">
            Suite B15, Boya Place Ameh Ebute <br />
            Street, Wuye- Abuja, Nigeria.
          </p>
        </div>
        <div className="flex gap-x-4">
          <AiOutlineInstagram size={25} />

          <BsFacebook size={25} />

          <AiOutlineTwitter color="#3AB75D" size={25} />

          <AiFillLinkedin size={25} />
        </div>
      </div>
      <div
        className="flex items-center justify-between  w-3/4 m-auto
      text-gray-500 font-light text-[12px] leading-[32px] mb-12 mt-12"
      >
        <span>All Rights Reserved © 2022, Quebec Earthwork Nig. Ltd.</span>
        <span>Powered by Soft-Web Digital.</span>
      </div>
    </div>
  );
}
