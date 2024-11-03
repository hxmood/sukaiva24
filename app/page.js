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

  console.log(after);

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
      <div className="w-full h-[88vh] ">
        <div className="px-6 md:px-8 lg:px-24 xl:px-36 w-full flex md:flex-row  flex-col h-full gap-4 relative items-center">
          <div className="basis-1/2 h-full flex  items-center ">
            <div className=" flex flex-col text-center md:text-start justify-center md:justify-start ">
            <h1 className="text-[3rem] md:text-[4rem] uppercase font-bold">Sukaiva</h1>
            <p className="font-semibold text-[1.5rem] -mt-5">Suffa Mehfil 2k24  </p>
            <div className="flex gap-2 pt-2">
              <div className="flex items-center p-1.5 px-2.5 bg-green-700 text-white font-semibold rounded-md gap-1 text-base">
              <FaYoutube />
              <Link className="" href={''}>Watch live</Link>
              </div>
              <div className="flex items-center p-1.5 px-2.5 bg-green-700 text-white font-semibold rounded-md gap-1 text-base">
              <FaGlobe />
              <Link className="" href={''}>Explore us</Link>
              </div>
              

            </div>
            </div>
            
          </div>

          <div className="basis-1/2 h-full">
            <Image  src={'https://res.cloudinary.com/dc9tcbi7s/image/upload/v1730566384/web_clgssl.png'}  width={0} height={0} sizes="100vw" 
            className="p-4 w-fit h-full" />
          </div>
        </div>
        
      </div>
      {/* <div className="w-full h-[87vh] bg-[#fff9ed] flex">
        <div className="px-6 md:px-8 lg:px-24 xl:px-36 w-full">
        <div className="basis-1/2 p-4">
        <div>
          <h1 className="text-5xl font-bold">Suffa Mehfil 2k24</h1>
          <h1 className="text-3xl">Sukaiva</h1>
          <h1 className="">the literary festival of Ahlussuffa</h1>
        </div>          
        </div>
        <div className="basis-1/2 bg-green-500">
        <Image src={}/>
        </div>
        </div> */}
        
       
      {/* </div> */}
      {/* <div className="px-5 md:px-10 lg:px-10 xl:px-36 relative text-center w-full h-screen flex flex-col gap-5 items-center justify-center mt-10 animated">
        <h1 className="flex flex-col text-center gap-1 xl:gap-2">
          <span className="text-[#3333cc] font-extrabold text-5xl lg:text-6xl xl:text-8xl">
            Suffa Mehfil
          </span>
          <span className="font-bold  capitalize text-3xl xl:text-4xl">
            literary festival 10th edition
          </span>
          <span className="text-lg lg:text-xl pt-2 font-normal italic">
            "the past speaks listen closely"
          </span>
        </h1>
        <button className="bg-[#109101] rounded-md flex px-4 py-3 text-white">
          <a
            className="flex items-center"
            target="_blank"
            href="https://youtube.com"
          >
            <YouTube />
            <span className="ml-1"> Watch live</span>
          </a>
        </button>
        <div className="pt-16 ">
          <button onClick={scrolltoteam}>
            <KeyboardArrowDownIcon
              fontSize="large"
              className="rounded-full p-1 animate-bounce transition-all duration-500 bg-white"
            />
          </button>
        </div>
      </div> */}

      <section id="teamStats" className="px-5 md:px-10 lg:px-10 xl:px-36 flex flex-col w-full justify-center items-center relative bg-green-50">
        <div className=" flex w-full flex-col mt-8">
          <h1 className="text-center  font-bold text-3xl xl:text-4xl ">
            Team Status
          </h1>
          {after.map(item => (

            <h1 className="text-2xl text-gray-400 text-center">After <span>#{item.after}</span></h1>
          ))
          }
          </div>
          <div className="w-full flex flex-col gap-y-4 mt-6">
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
                  className={`w-full backdrop-blur-sm bg-opacity-90 max-sm:w-full p-4 flex flex-col md:flex-ro  items-center justify-center rounded-lg drop-shadow-md shadow-lg ${teamColors[team]}`}>
                  <h1 className="text-3xl font-bold">{points}</h1>
                  <p className="font-medium text-base ">{team}</p>
                </div>
                </>
              ))}
            </>
          )}
        </div>
      </section>

      <div className="flex flex-col gap-5 py-24 mt-4 text-center w-full px-3 md:px-10 lg:px-10 xl:px-36">
        <h2 className="font-bold text-[#1d2c55] text-3xl xl:text-4xl">
          Theme of 23
        </h2>
        <h1 className=" text-lg font-medium ">
          "Unveiling the Canvas of India's Past: Join us on a journey through
          the vibrant strokes of history, as we bring to life the artistry that
          encapsulates India's rich tapestry of historical discriminations.
          Through the medium of art, we explore the stories, struggles, and
          resilience of our nation, painting a vivid picture of the past to
          inspire a brighter future."
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 px-3 md:px-10 lg:px-10 xl:px-36">
        <img
          src="/images/Poster1.jpeg"
          className="object-cover h-full w-full rounded-md"
        />
        <img
          src="/images/Poster2.jpeg"
          className="object-cover h-full w-full rounded-md"
        />
        <img
          src="/images/Poster3.jpeg"
          className="object-cover h-full w-full rounded-md"
        />
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
