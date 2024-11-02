"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const resId = searchParams.get('id')
  console.log(resId);
  const [resultItem, setResultItem] = useState({
    item: "",
    category: "",
  });
  const [firstResult, setFirstResult] = useState({
    name: "",
    team: "",
    grade: "",
    marks: "",
  });
  const [secondResult, setSecondResult] = useState({
    secName: "",
    secTeam: "",
    secGrade: "",
    secMarks: "",
  });
  const [thirdResult, setThirdResult] = useState({
    thrName: "",
    thrTeam: "",
    thrGrade: "",
    thrMarks: "",
  });

  useEffect(() => {
    const getResults = async() => {
      const response = await fetch(`/api/results/${resId}`)
      const data = await response.json()
      console.log(data);
    
      setResultItem({
        item: data.res,
        category: data.category
      })
      console.log(resultItem)

      setFirstResult({
        name: data.name,
        team: data.team,
        grade: data.grade,
        marks: data.marks
      })
    }

    if(resId) {
      getResults()
      console.log("get result");
    }
    
  }, [resId])


  const UpdateResult = async(e) => {
    e.preventDefault()
    try {
      const response = fetch(`/api/results/${resId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          res: resultItem.item,
          category: resultItem.category,
          name: firstResult.name,
          team: firstResult.team,
          grade: firstResult.grade,
          marks: firstResult.marks,
          secName: secondResult.secName,
          secTeam: secondResult.secTeam,
          secGrade: secondResult.secGrade,
          secMarks: secondResult.secMarks,
          thrName: thirdResult.thrName,
          thrTeam: thirdResult.thrTeam,
          thrGrade: thirdResult.thrGrade,
          thrMarks: thirdResult.thrMarks
        })
      })
      
    } catch (error) {
      console.log("error editing the results")
    }
  };

  return (
    <main className="flex px-3 md:px-10 lg:px-10 xl:px-36  pt-32 flex-col w-full p-5 shadow-xl bg-gray-200 relative">
      <div className=" flex flex-1 mt-6 p-6 relative">
        <form
          onSubmit={UpdateResult}
          className="flex flex-1 flex-col space-y-2"
        >
          <div className="flex gap-3 items-center mb-6">
            <div className="flex-1 flex gap-3 items-center">
              <label>result:</label>
              <input
                value={resultItem.item}
                onChange={(e) =>
                  setResultItem({ ...resultItem, item: e.target.value })
                }
                type="text"
                className="p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex-1 flex justify-end items-center gap-3">
              <label>Category:</label>
              <select
                value={resultItem.category}
                onChange={(e) =>
                  setResultItem({ ...resultItem, category: e.target.value })
                }
                className="p-2 border border-gray-400 rounded"
              >
                <option>Zone</option>
                <option value="B zone">B zone</option>
                <option value="C zone">C zone</option>
                <option value="Y zone">Y zone</option>
                <option value="H zone">H zone</option>
                <option value="General">General</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-5 ">
            <h2 className="col-span-5 font-semibold text-lg">First:</h2>
            <div className="col-span-2">
              <input
                value={firstResult.name}
                onChange={(e) =>
                  setFirstResult({ ...firstResult, name: e.target.value })
                }
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
            </div>

            <div className="col-span-2">
              <select
                value={firstResult.team}
                onChange={(e) =>
                  setFirstResult({ ...firstResult, team: e.target.value })
                }
                className="w-full p-2 rounded border border-gray-300"
              >
                <option>Select team</option>
                <option value="Traditional Trackers">
                  Traditional Trackers
                </option>
                <option value="Legacy Legends">Legacy Legends</option>
                <option value="Ancient Alliance">Ancient Alliance</option>
              </select>
            </div>
            <div className="col-span-1 relative">
              <select
                value={firstResult.grade}
                onChange={(e) =>
                  setFirstResult({ ...firstResult, grade: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option>Grade</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
            <div className="col-span-1 flex items-center">
              <input
                value={firstResult.marks}
                onChange={(e) =>
                  setFirstResult({ ...firstResult, marks: e.target.value })
                }
                type="number"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter mark"
              />

            </div>
          </div>


          {/* ------------------------------ */}

          <div className="grid grid-cols-6 pt-3 gap-5">
            <h2 className="col-span-5 font-semibold text-lg">Second:</h2>
            <div className="col-span-2">
              <input
                value={secondResult.name}
                onChange={(e) =>
                  setSecondResult({ ...secondResult, name: e.target.value })
                }
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
            </div>

            <div className="col-span-2">
              <select
                value={secondResult.team}
                onChange={(e) =>
                  setSecondResult({ ...secondResult, team: e.target.value })
                }
                className="w-full p-2 rounded border border-gray-300"
              >
                <option>Select team</option>
                <option value="Traditional Trackers">
                  Traditional Trackers
                </option>
                <option value="Legacy Legends">Legacy Legends</option>
                <option value="Ancient Alliance">Ancient Alliance</option>
              </select>
            </div>
            <div className="col-span-1 relative">
              <select
                value={secondResult.grade}
                onChange={(e) =>
                  setSecondResult({ ...secondResult, grade: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option>Grade</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
            <div className="col-span-1 flex items-center">
              <input
                value={secondResult.marks}
                onChange={(e) =>
                  setSecondResult({ ...secondResult, marks: e.target.value })
                }
                type="number"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter mark"
              />
            </div>
          </div>

        

          <div className="grid grid-cols-6 pt-3 gap-5">
            <h2 className="col-span-5 font-semibold text-lg">Third:</h2>
            <div className="col-span-2">
              <input
                value={thirdResult.name}
                onChange={(e) =>
                  setThirdResult({ ...thirdResult, name: e.target.value })
                }
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
            </div>

            <div className="col-span-2">
              <select
                value={thirdResult.team}
                onChange={(e) =>
                  setThirdResult({ ...thirdResult, team: e.target.value })
                }
                className="w-full p-2 rounded border border-gray-300"
              >
                <option>Select team</option>
                <option value="Traditional Trackers">
                  Traditional Trackers
                </option>
                <option value="Legacy Legends">Legacy Legends</option>
                <option value="Ancient Alliance">Ancient Alliance</option>
              </select>
            </div>
            <div className="col-span-1 relative">
              <select
                value={thirdResult.grade}
                onChange={(e) =>
                  setThirdResult({ ...thirdResult, grade: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option>Grade</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
            <div className="col-span-1 flex items-center">
              <input
                value={thirdResult.marks}
                onChange={(e) =>
                  setThirdResult({ ...thirdResult, marks: e.target.value })
                }
                type="number"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter mark"
              />
              <h1
                className="ml-4 cursor-pointer text-green-700 font-extrabold text-lg"
                // onClick={handleAnotherThird}
              >
                +
              </h1>
            </div>
          </div>


          {/* ---------------------------- */}

          {/* {addItems.map(() => (
            <>
              <h1 className="pt-3 font-semibold ">Another grades:</h1>
              <div className="grid grid-cols-6 pt-6 gap-5">
                <div className="col-span-2">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter name"
                  />
                </div>

                <div className="col-span-2">
                  <select
                    className="w-full p-2 rounded border border-gray-300"
                  >
                    <option value="Traditional Trackers">Traditional Trackers</option>
                <option value="Legacy Legends">Legacy Legends</option>
                <option value="Ancient Alliance">Ancient Alliance</option>
                  </select>
                </div>
                <div className="col-span-1 relative">
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option>Grade</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter name"
                  />
                </div>
              </div>
            </>
          ))} */}

          <div className="">
            <button
              type="button"
              className="px-4 py-1 bg-green-900 text-white"
              // onClick={handleAddItem}
            >
              <span className="font-bold text-lg">+</span>Add item
            </button>
          </div>
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="px-4 py-3  rounded bg-[#2372fa] font-semibold text-lg text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <form></form>
    </main>
  );
};

export default page;
