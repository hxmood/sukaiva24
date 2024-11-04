"use client";
import { FaYoutube,FaGlobe } from "react-icons/fa";

import React, { useEffect, useState } from "react";
import "@/styles/global.css";
import { Facebook, Instagram, Language, YouTube } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ScrollToTop from "react-scroll-to-top";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [totalPoints, setTotalPoints] = useState(null);
  const [after, setAfter] = useState([])

  const scrolltoteam = () => {
    const element = document.getElementById("teamStats");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };
  const fetchRes = async () => {
    const response = await fetch("/api/getPoints");
    const datas = await response.json();
    setTotalPoints(datas);
  };

  const afterPoints = async () => {
    const response = await fetch("/api/afterPoints")
    const data = await response.json()
    setAfter(data)
  }
  useEffect(() => {
    fetchRes();
    afterPoints()
  }, []);

  // console.log(after);

  const sorted3Teams = totalPoints
    ? Object.entries(totalPoints).sort(([, a], [, b]) => b - a)
    : [];

  const teamColors = {
    "De zegians": "bg-blue-700",
    "Le hegians": "bg-yellow-700 ",
    "En shugians": "bg-red-700",
  };

  return (
    <div className=" ">
      <div className="w-full h-[88vh] pb-6 ">
        <div className="px-6 md:px-8 lg:px-24 xl:px-36 w-full flex md:flex-row mt-8 md:mt-4 lg:mt-2 flex-col h-full gap-4 relative items-center">
          <div className="basis-1/2 h-full flex  items-center ">
            <div className=" flex flex-col text-center md:text-start justify-center md:justify-start ">
            <h1 className="text-5xl md:text-[4rem] uppercase font-bold">Sukaiva</h1>
            <p className="font-semibold text-[1.5rem] text-gray-800">Suffa Mehfil 2k24  </p>
            <div className="flex gap-2 pt-2 mt-4">
              <div className="flex items-center p-1.5 px-2.5 bg-green-700 text-white font-semibold rounded-md gap-1 text-base">
              <FaYoutube />
              <Link className="" href="https://www.youtube.com/live/gimh1IPVMbM?si=qHWG8HiDLpVPa184">Watch live</Link>
              </div>
              <div className="flex items-center p-1.5 px-2.5 bg-green-700 text-white font-semibold rounded-md gap-1 text-base">
              <FaGlobe />
              <Link className="" href='https://www.ahlussuffadars.in/'>Explore us</Link>
              </div>
              

            </div>
            </div>
            
          </div>

          <div className="flex-1 h-full">
            <Image  src={'https://res.cloudinary.com/dc9tcbi7s/image/upload/v1730566384/web_clgssl.png'}  width={0} height={0} sizes="100vw" 
            className="p-4 w-fit h-full" />
          </div>
        </div>
        
      </div>

      <section id="teamStats" className="px-5 md:px-10 lg:px-10 xl:px-36 flex flex-col w-full justify-center items-center relative bg-green-700 text-white">
        <div className=" flex w-full flex-col mt-8">
          <h1 className="text-center  font-bold text-3xl xl:text-4xl ">
            Team Status
          </h1>
          {after.map(item => (

            <h1 className="text-2xl text-center">After <span>#{item.after}</span></h1>
          ))
          }
          </div>
          <div className="w-full flex md:flex-row flex-col gap-4 mt-6 pb-10">
          {!sorted3Teams.length ? (
            <div className="flex flex-col gap-4">
              <div className="w-full h-24 rounded-md  bg-gray-50 animate-pulse"></div>
              <div className="w-full h-24 rounded-md  bg-gray-50 animate-pulse"></div>
              <div className="w-full h-24 rounded-md  bg-gray-50 animate-pulse"></div>
            </div>
          ) : (
            <>
              {sorted3Teams.map(([team, points]) => (
                <>
                <div
                  className={`w-full backdrop-blur-sm bg-opacity-90 max-sm:w-full p-4 flex flex-col md:flex-row gap-4  items-center justify-center rounded-lg drop-shadow-md shadow-lg ${teamColors[team]}`}>
                  <h1 className="text-4xl font-bold">{points}</h1>
                  <p className="font-medium text-2xl ">{team}</p>
                </div>
                </>
              ))}
            </>
          )}
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-5 py-24 mt-4 text-center w-full px-3 md:px-10 lg:px-10 xl:px-36 items-center">
        <div className="w-full md:w-1/2 justify-center flex">
        <Image src={'https://res.cloudinary.com/dc9tcbi7s/image/upload/v1730620570/Asset_1_ptrs4u.png'} width={0} height={0} sizes="100vw"
        className="w-1/2 h-fit" alt="typo" />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center md:justify-start md:w-1/2" >
          <p className="text-[60px] opacity-[10%] font-bold">The Moto</p>
        <h1 className=" text-sm font-medium w-full md:text-start text-center p-4">
        In the heart of Kerala, a legacy was born. A legacy not just of words, but of wisdom. The footprints of our scholars, giants like Sheikh Zainudhin Maqdoum and those who followed, carved a path that we walk today. They were the torchbearers of truth, guardians of knowledge, and the light that illuminated our traditions.
This is the story of ‘Sucaiva’—a journey that traces the imprints of our esteemed Sunni Muslim scholars. It is more than a festival; it is a resolution, a movement to honor and remember the heritage of Islamic knowledge they left behind.
In their dedication, we see our mission. In their wisdom, we find our direction. Sucaiva calls us to rise, to learn, and to continue their journey, carrying the torch of knowledge forward.
Let us celebrate their legacy, revive their traditions, and keep the flame alive.
        </h1>
        </div>
      </div>

<div className="flex flex-col gap-4 justify-center items-center text-center">

  <p className="text-[60px] opacity-[10%] font-bold">From the lens</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 px-3 md:px-10 lg:px-10 xl:px-36">
        <Image
          src={'https://res.cloudinary.com/dc9tcbi7s/image/upload/v1730622018/6140861270098820137_121_qhgkiu.jpg'}
          width={0}
          height={0}
          sizes="100vw"
          className="w-fit h-fit rounded"
        />
        <Image
          src={'https://res.cloudinary.com/dc9tcbi7s/image/upload/v1730622018/6140861270098820134_121_aezmnv.jpg'}
          width={0}
          height={0}
          sizes="100vw"
          className="w-fit h-fit rounded"
        />
        <Image
          src={'https://res.cloudinary.com/dc9tcbi7s/image/upload/v1730622022/6140861270098820135_121_gajjth.jpg'}
          width={0}
          height={0}
          sizes="100vw"
          className="w-fit h-fit rounded"
        />
        
      </div>
</div>

      <footer className="px-5 md:px-10 lg:px-10 xl:px-36 w-full sm:max-w-full bg-[#151622] flex flex-col items-center justify-center">
        <h1 className="text-white mt-8 font-semibold text-sm">Get connected</h1>
        <div className="flex items-center justify-center text-white gap-1">
          <a target="_blank" href="https://www.instagram.com/_hxmood.14_/">
            <Instagram fontSize="medium" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/muhammad.pattilath"
          >
            <Facebook fontSize="medium" />
          </a>
          <a href="/">
            <Language fontSize="medium" />
          </a>
          <a href="/">
            <YouTube fontSize="medium" />
          </a>
        </div>
        <h1 className="text-gray-100 mt-4 mb-2">
          <span>&copy;</span> Muhammad Hameed - 2023
        </h1>
      </footer>
      <ScrollToTop
        smooth
        height="20"
        width="20"
        className="flex items-center justify-center z-50"
      />

      
    </div>
  );
};

export default page;
