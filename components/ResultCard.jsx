import React, { useState } from "react";

const ResultCard = ({ post, index }) => {
  const arrays = post.anotherGrades;
  const firstletter = (str) => {
    const getfirst = str
      ?.split(" ")
      ?.map((word) => word.charAt(0))
      ?.join(".");
    return getfirst;
  };

  return (
    <div className="flex flex-col bg-[#fdfdfd] shadow-md rounded-lg p-3 capitalize">
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <h1 className="hidden lg:inline-block text-gray-400">#{index}</h1>
          <h1 className="font-semibold text-lg">{post.res}</h1> 
        </div>

        <h2>{post.category}</h2>
      </div>
      <hr className="mt-2 " />

      {/*--------------------------  */}

      <div className="flex flex-col">
        <div className="flex mt-1 flex-col px-2">
          <div className="flex gap-2 w-full">
            <div className="flex basis-1/2 items-end">
              <h1 className="mr-4 font-lobster font-normal text-2xl">
                1<span className="font-sans text-xs font-extralight">st</span>
              </h1>
              <h1 className="truncate w-2/3">{post.first.name}</h1>
            </div>

            <div className="flex basis-1/2 ">
              <div className="grid w-full grid-cols-3 place-items-end place-content-center">
                <h2>{post.first.grade}</h2>
                <h2>{post.first.marks}</h2>
                <p className="text-gray-500">{firstletter(post.first.team)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------- */}

        <div className="flex mt-1 flex-col px-2 items-center">
          <div className="flex gap-2 w-full">
            <div className="flex basis-1/2 items-end">
              <h1 className="mr-2 font-lobster text-2xl font-normal">
                2<span className="font-sans text-xs font-extralight">nd</span>
              </h1>
              <h1 className="truncate w-2/3">{post.second.secName}</h1>
            </div>

            <div className="flex basis-1/2 ">
              <div className="grid w-full grid-cols-3 place-items-end">
                <h2>{post.second.secGrade}</h2>
                <h2>{post.second.secMarks}</h2>
                <p className="text-gray-500">
                  {firstletter(post.second.secTeam)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}

        <div className="flex mt-1 flex-col px-2 items-end">
          <div className="flex  gap-2 w-full">
            <div className="flex basis-1/2 items-end">
              <h1 className="mr-2 font-lobster font-normal text-2xl">
                3<span className="font-sans text-xs font-extralight">rd</span>
              </h1>
              <h1 className="truncate w-2/3">{post.third.thrName}</h1>
            </div>

            <div className="flex basis-1/2 ">
              <div className="grid w-full grid-cols-3 place-items-end">
                <h2>{post.third.thrGrade}</h2>
                <h2>{post.third.thrMarks}</h2>
                <p className="text-gray-500">
                  {firstletter(post.third.thrTeam)}
                </p>
              </div>
            </div>
          </div>

          {arrays &&
            arrays?.map((data, index) => (
              <div className="flex gap-2 w-full mt-2 text-gray-600" key={index}>
                <div className="flex basis-1/2 items-center">
                  {data && <h1 className="ml-3 font-bold">--</h1>}
                  <h1 className="truncate w-2/3 ml-2">{data.addName}</h1>
                </div>

                <div className="flex basis-1/2" key={index}>
                  <div className="grid w-full grid-cols-3 place-items-end">
                    <h2>{data.addGrade}</h2>
                    <h2>{data.addMarks}</h2>
                    <p className="text-gray-500">{firstletter(data.addTeam)}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
