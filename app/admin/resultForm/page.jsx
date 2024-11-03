"use client";

import React, { useState } from "react";
import { names } from "@/names/page";
import Link from "next/link";

export const Adminpage = () => {
  const allNames = [].concat(...Object.values(names));
  const [selectedForm, setSelectedForm] = useState("individual");

  const [resultItem, setResultItem] = useState({
    item: "",
    category: "",
  });

  const categorized = names[resultItem.category] || [];

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

  const [addItems, setAddItems] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();
    setAddItems([
      ...addItems,
      { addName: "", addTeam: "", addGrade: "", addMarks: "" },
    ]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFormData = [...addItems];
    updatedFormData[index][name] = value;
    setAddItems(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      res: resultItem.item,
      category: resultItem.category,
      first: firstResult,
      second: secondResult,
      third: thirdResult,
      anotherGrades: addItems,
    };

    try {
      const res = await fetch("/api/results", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (res.ok) {
        alert("Results posted successfully");
        setResultItem({
          item: "",
          category: "",
        });

        setFirstResult({
          name: "",
          team: "",
          grade: "",
          marks: "",
        }),
          setSecondResult({
            secName: "",
            secTeam: "",
            secGrade: "",
            secMarks: "",
          });

        setThirdResult({
          thrName: "",
          thrTeam: "",
          thrGrade: "",
          thrMarks: "",
        });

        setAddItems([]);
      } else {
        alert("Failed to post results");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while posting results");
    }
  };

  console.log(categorized);
  

  return (
    <div className="px-3 md:px-10 lg:px-10 flex flex-col gap-5 mt-12 items-start">
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedForm("individual")}
          className={`p-3  px-4 rounded-md text-sm md:text-lg font-medium ${
            selectedForm == "individual"
              ? "bg-green-600 text-white"
              : "bg-green-200 "
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => setSelectedForm("general")}
          className={`p-3 px-4   rounded-md text-sm md:text-lg  font-medium ${
            selectedForm == "general"
              ? "bg-green-600 text-white"
              : "bg-green-200 "
          }`}
        >
          General
        </button>
      </div>
      <main className="flex flex-col w-full p-5 rounded-md bg-gray-200 relative mt-4">
        {selectedForm == "individual" && (
          <>
            <div className=" flex flex-col flex-1 gap-4 p-6 relative">
              <h1 className="font-semibold uppercase text-red-600 text-start text-lg md:text-xl">
                Individual results
              </h1>
              <form
                onSubmit={handleSubmit}
                className="flex mt-4 flex-1 flex-col"
              >
                <div className="text-lg capitalize flex gap-3 items-center mb-6">
                  <div className="flex-1 flex gap-3 items-end">
                    <label>result:</label>
                    <input
                      required
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
                      required
                      value={resultItem.category}
                      onChange={(e) =>
                        setResultItem({
                          ...resultItem,
                          category: e.target.value,
                        })
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

                {/* --------------------------------------------------------- */}

                <div className="grid grid-cols-6 gap-5 ">
                  <h2 className="col-span-5 font-semibold text-lg">First:</h2>
                  <div className="col-span-2">
                    <select
                      className="w-full border border-gray-300 p-2 rounded"
                      value={firstResult.name}
                      onChange={(e) =>
                        setFirstResult({ ...firstResult, name: e.target.value })
                      }
                    >
                      <option>Select Name</option>
                      {categorized.length !== 0
                        ? categorized.map((item) => (
                            <option value={item}>{item}</option>
                          ))
                        : allNames.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                    </select>
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={firstResult.team}
                      onChange={(e) =>
                        setFirstResult({ ...firstResult, team: e.target.value })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="De Zegians">
                        De Zegians
                      </option>
                      <option value="Le Hegians">Le Hegians</option>
                      <option value="En Shugians">En Shugians</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={firstResult.grade}
                      onChange={(e) =>
                        setFirstResult({
                          ...firstResult,
                          grade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={firstResult.marks}
                      onChange={(e) =>
                        setFirstResult({
                          ...firstResult,
                          marks: e.target.value,
                        })
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
                    <select
                      className="w-full border border-gray-300 p-2 rounded"
                      value={secondResult.secName}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secName: e.target.value,
                        })
                      }
                    >
                      <option>Select Name</option>
                      {categorized.length !== 0
                        ? categorized.map((item) => (
                            <option value={item}>{item}</option>
                          ))
                        : allNames.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                    </select>
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={secondResult.secTeam}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secTeam: e.target.value,
                        })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="De Zegians">
                        De Zegians
                      </option>
                      <option value="Le Hegians">Le Hegians</option>
                      <option value="En Shugians">En Shugians</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={secondResult.secGrade}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secGrade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={secondResult.secMarks}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secMarks: e.target.value,
                        })
                      }
                      type="number"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Enter mark"
                    />
                  </div>
                </div>

                {/* ------------------------------------------- */}

                <div className="grid grid-cols-6 pt-3 gap-5">
                  <h2 className="col-span-5 font-semibold text-lg">Third:</h2>
                  <div className="col-span-2">
                    <select
                      className="w-full border border-gray-300 p-2 rounded"
                      value={thirdResult.thrName}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrName: e.target.value,
                        })
                      }
                    >
                      <option>Select Name</option>
                      {categorized.length !== 0
                        ? categorized.map((item) => (
                            <option value={item}>{item}</option>
                          ))
                        : allNames.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                    </select>
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={thirdResult.thrTeam}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrTeam: e.target.value,
                        })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="De Zegians">
                        De Zegians
                      </option>
                      <option value="Le Hegians">Le Hegians</option>
                      <option value="En Shugians">En Shugians</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={thirdResult.thrGrade}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrGrade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={thirdResult.thrMarks}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrMarks: e.target.value,
                        })
                      }
                      type="number"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Enter Mark"
                    />
                  </div>
                </div>

                {/* -------------------------------------------------------------------- */}

                {addItems.map((data, index) => (
                  <>
                    <h1 className="pt-3 font-semibold ">Another grades:</h1>
                    <div className="grid grid-cols-7 pt-6 gap-5">
                      <div className="col-span-2">
                        <select
                          className="w-full border border-gray-300 p-2 rounded"
                          name="addName"
                          value={data.addName}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Select Name</option>
                          {categorized.length !== 0
                            ? categorized.map((item) => (
                                <option value={item}>{item}</option>
                              ))
                            : allNames.map((item) => (
                                <option value={item}>{item}</option>
                              ))}
                        </select>
                      </div>

                      <div className="col-span-2">
                        <select
                          className="w-full p-2 rounded border border-gray-300"
                          name="addTeam"
                          value={data.addTeam}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Select Team</option>
                          <option value="De Zegians">
                            De Zegians
                          </option>
                          <option value="Le Hegians">Le Hegians</option>
                          <option value="En Shugians">
                            En Shugians
                          </option>
                        </select>
                      </div>
                      <div className="col-span-1 relative">
                        <select
                          className="w-full p-2 border border-gray-300 rounded"
                          name="addGrade"
                          value={data.addGrade}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Grade</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="-">-</option>
                        </select>
                      </div>
                      <div className="col-span-1 flex items-center">
                        <input
                          name="addMarks"
                          value={data.addMarks}
                          onChange={(e) => handleChange(index, e)}
                          type="number"
                          className="w-full border border-gray-300 p-2 rounded"
                          placeholder="Enter Mark"
                        />
                        <h1 className="cursor-pointer ml-4 font-extrabold text-red-700" onClick={() => {setAddItems([])}}>x</h1>
                      </div>
                      
                    </div>
                  </>
                ))}

                <div className="">
                  <button
                    type="button"
                    className="px-4 py-1 bg-green-900 text-white"
                    onClick={handleAddItem}
                  >
                    <span className="font-bold text-lg">+</span>Add item
                  </button>
                </div>
                <div className="flex justify-end pt-6">
                  <button
                    type="submit"
                    className="px-4 py-3  rounded-md bg-blue-600 font-semibold text-lg text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {selectedForm == "general" && (
          <>
            <div className=" flex flex-col gap-4  flex-1 p-6 relative">
              <h1 className="font-semibold uppercase text-red-600 text-start text-lg md:text-xl">
                General group results
              </h1>
              <form
                onSubmit={handleSubmit}
                className="flex flex-1 flex-col pt-4 space-y-2"
              >
                <div className="capitalize text-lg flex gap-3 items-center mb-6">
                  <div className="flex-1 flex gap-3 items-center">
                    <label>result:</label>
                    <input
                      required
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
                      required
                      value={resultItem.category}
                      onChange={(e) =>
                        setResultItem({
                          ...resultItem,
                          category: e.target.value,
                        })
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

                {/* --------------------------------------------------------- */}

                <div className="grid grid-cols-6 gap-5 ">
                  <h2 className="col-span-5 font-semibold text-lg">First:</h2>
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={firstResult.name}
                      placeholder="Enter a name"
                      onChange={(e) =>
                        setFirstResult({ ...firstResult, name: e.target.value })
                      }
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={firstResult.team}
                      onChange={(e) =>
                        setFirstResult({ ...firstResult, team: e.target.value })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="De Zegians">
                        De Zegians
                      </option>
                      <option value="Le Hegians">Le Hegians</option>
                      <option value="En Shugians">En Shugians</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={firstResult.grade}
                      onChange={(e) =>
                        setFirstResult({
                          ...firstResult,
                          grade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={firstResult.marks}
                      onChange={(e) =>
                        setFirstResult({
                          ...firstResult,
                          marks: e.target.value,
                        })
                      }
                      type="number"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Enter mark"
                    />
                  </div>
                </div>

                {/* ------------------------------------------- */}

                <div className="grid grid-cols-6 gap-5 ">
                  <h2 className="col-span-5 font-semibold text-lg">Second:</h2>
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={secondResult.secName}
                      placeholder="Enter a name"
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secName: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={secondResult.secTeam}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secTeam: e.target.value,
                        })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="De Zegians">
                        De Zegians
                      </option>
                      <option value="Le Hegians">Le Hegians</option>
                      <option value="En Shugians">En Shugians</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={secondResult.secGrade}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secGrade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={secondResult.secMarks}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secMarks: e.target.value,
                        })
                      }
                      type="number"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Enter mark"
                    />
                  </div>
                </div>

                {/* --------------------------------------------- */}

                <div className="grid grid-cols-6 gap-5 ">
                  <h2 className="col-span-5 font-semibold text-lg">Third:</h2>
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={thirdResult.thrName}
                      placeholder="Enter a name"
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrName: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={thirdResult.thrTeam}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrTeam: e.target.value,
                        })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="De Zegians">
                        De Zegians
                      </option>
                      <option value="Le Hegians">Le Hegians</option>
                      <option value="En Shugians">En Shugians</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={thirdResult.thrGrade}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrGrade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={thirdResult.thrMarks}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrMarks: e.target.value,
                        })
                      }
                      type="number"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Enter mark"
                    />
                  </div>
                </div>

                {/* ----------------------------------------------------------- */}

                {addItems.map((data, index) => (
                  <>
                    <h1 className="pt-3 font-semibold ">Another grades:</h1>
                    <div className="grid grid-cols-6 pt-6 gap-5">
                      <div className="col-span-2">
                        <input
                          className="w-full border border-gray-300 p-2 rounded"
                          placeholder="Enter a name"
                          name="addName"
                          value={data.addName}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </div>

                      <div className="col-span-2">
                        <select
                          className="w-full p-2 rounded border border-gray-300"
                          name="addTeam"
                          value={data.addTeam}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Select Team</option>
                          <option value="De Zegians">
                            De Zegians
                          </option>
                          <option value="Le Hegians">Le Hegians</option>
                          <option value="En Shugians">En Shugians</option>
                        </select>
                      </div>
                      <div className="col-span-1 relative">
                        <select
                          className="w-full p-2 border border-gray-300 rounded"
                          name="addGrade"
                          value={data.addGrade}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Grade</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="-">-</option>
                        </select>
                      </div>
                      <div className="col-span-1">
                        <input
                          name="addMarks"
                          value={data.addMarks}
                          onChange={(e) => handleChange(index, e)}
                          type="number"
                          className="w-full border border-gray-300 p-2 rounded"
                          placeholder="Enter Mark"
                        />
                      </div>
                    </div>
                  </>
                ))}

                {/* --------------------------------------------- */}

                <div className="">
                  <button
                    type="button"
                    className="px-4 py-1 bg-green-900 text-white"
                    onClick={handleAddItem}
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
          </>
        )}

        <div className="py-10 flex justify-between p-6">
          <Link href="/imagesUpload">
            <button className="bg-green-900 rounded-lg px-5 py-3 text-white font-semibold w-fit">
              Upload Images
            </button>
          </Link>
          <Link href="/publishPoints">
            <button className="bg-green-900 rounded-lg px-5 py-3 text-white font-semibold w-fit">
              Publish Points
            </button>
          </Link>
          <Link href="/updatePoints">
            <button className="bg-green-900 rounded-lg px-5 py-3 text-white font-semibold w-fit">
              Update Points
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Adminpage;
