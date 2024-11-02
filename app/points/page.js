"use client";
import React, { useEffect, useState } from "react";
import { names } from "@/names/page";
import ScrollToTop from "react-scroll-to-top";

const page = () => {
  const [points, setPoints] = useState([]);

  const fetchRes = async () => {
    try {
      const response = await fetch("/api/participantPoints", {
        cache: "no-store",
      });
      const datas = await response.json();
      setPoints(datas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRes();
  }, []);

  const firstletter = (str) => {
    const getfirst = str
      ?.split(" ")
      ?.map((word) => word.charAt(0))
      ?.join(".");
    return getfirst;
  };

  const filteredBZone = points
    ?.filter((item) => names["B zone"].includes(item.name))
    ?.sort((a, b) => b.points - a.points);
  const filteredCZone = points
    ?.filter((item) => names["C zone"].includes(item.name))
    ?.sort((a, b) => b.points - a.points);
  const filteredYZone = points
    ?.filter((item) => names["Y zone"].includes(item.name))
    ?.sort((a, b) => b.points - a.points);

  return (
    <div className="px-5 w-full  pt-32 md:px-10 lg:px-10 xl:px-36 flex flex-col space-y-4">
      {points.length !== 0 ? (
        <>
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl mt-4">B zone</h1>
            <div className="flex flex-col mt-2 bg-[#fdfdfd] shadow-lg w-full p-3 rounded-md">
              {filteredBZone.length !== 0 &&
                filteredBZone.map((item, index) => (
                  <div
                    className="flex items-center px-2 capitalize"
                    key={index}
                  >
                    <div className="flex basis-1/2 w-full">
                      <h1 className="mr-2">{index + 1}.</h1>
                      <h1 >{item.name}</h1>
                    </div>
                    <div className="flex basis-1/2 w-full justify-center">
                      <div className="grid w-full grid-cols-2 place-items-end gap-2">
                        <h1>{item.points}</h1>
                        <h1 className="text-gray-600">{firstletter(item.team)}</h1>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl">C zone</h1>
            <div className="flex flex-col mt-2 bg-[#fdfdfd] shadow-lg w-full p-3 rounded-md">
              {filteredCZone.length !== 0 &&
                filteredCZone.map((item, index) => (
                  <div
                    className="flex items-center px-2 capitalize"
                    key={index}
                  >
                    <div className="flex basis-1/2 w-full">
                      <h1 className="mr-2">{index + 1}.</h1>
                      <h1>{item.name}</h1>
                    </div>
                    <div className="flex basis-1/2 w-full">
                      <div className="grid grid-cols-2 place-items-end w-full">
                        <h1>{item.points}</h1>
                        <h1 className="text-gray-600">{firstletter(item.team)}</h1>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl">Y zone</h1>
            <div className="flex flex-col mt-2 bg-[#fdfdfd] shadow-lg w-full p-3 rounded-md">
              {filteredYZone.map((item, index) => (
                <div className="flex items-center px-2 capitalize" key={index}>
                  <div className="flex basis-1/2 w-full">
                    <h1 className="mr-2">{index + 1}.</h1>
                    <h1>{item.name}</h1>
                  </div>
                  <div className="flex basis-1/2 w-full">
                    <div className="grid grid-cols-2 w-full place-items-end">
                      <h1>{item.points}</h1>
                      <h1 className="text-gray-600">{firstletter(item.team)}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ScrollToTop
              smooth
              height="20"
              width="20"
              className="flex items-center justify-center z-50"
            />
          </div>
        </>
      ) : (
        <h1 className="text-center mt-6 text-md">Results not published yet</h1>
      )}
    </div>
  );
};

export default page;
