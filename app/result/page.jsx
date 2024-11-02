"use client";


import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [filter, setFilter] = useState({programName: "", category: ""})
  const [programNames, setProgramNames] = useState([])
  const [results, setResults] = useState([])

  const fetchProgramNames = async () => {
    try {
      const response = await fetch('/api/programNames');
      const data = await response.json();
      setProgramNames(data)
      console.log(programNames);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  //   const response = await axios('/api/filteredResult', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ res: filter.programName, category: filter.category })
  //   });
  //   const data = await response.json();
    
  //   if (data) {
  //     setResults(data)
  //     console.log(results);
      
  //   }
  //   else{
  //     console.log("error fetching filtered results");
      
  //   }


  
  try {
    if (results) {
      setResults([])
    }
    // Send programName and category as query parameters
    const response = await axios.get(`/api/filteredResult?programName=${filter.programName}&category=${filter.category}`);
    
    
    if (response.data.success) {
      setResults(response.data.data);
      
    }

    
  } catch (error) {
    console.error('Error:', error);
  }
};

  


  useEffect(() => {
    fetchProgramNames()
  }, [])


  return (
    <div className='w-full px-6 md:px-8 lg:px-24 xl:px-36'>
        <form onSubmit={handleSubmit} className='mt-36 w-full md:w-2/3 lg:w-[40%] mx-auto bg-slate-50 px-8 rounded-xl py-12 border-2 border-green-600 '>
        <h1 className='text-2xl lg:text-3xl font-bold text-green-600'>Check results</h1>
        <div className='flex flex-col mt-4'>
            <label className='text-slate-500'>category</label>
            <select required value={filter.category} onChange={(e) => setFilter({ ...filter, category: e.target.value })} className='py-4 px-3 rounded-lg outline-none mt-1'>
            <option >Select the Category</option>
              <option value="B zone">B zone</option>
              <option value="C zone">C zone</option>
              <option value="Y zone">Y zone</option>
              <option value="General">General</option>
              <option value="H zone">H zone</option>
            </select>
          </div>
            <div className='mt-5 flex flex-col'>
              <label className='text-slate-500'>program</label>
              <select value={filter.programName} onChange={(e) => setFilter({ ...filter, programName: e.target.value })} className='mt-1 py-4 px-3 rounded-lg outline-none'>
                {programNames ? <option >Select the Item</option> : <option >Select the Category First</option>}
                
              {programNames.map((programName, index) => (
                <option key={index} value={programName}>
                {programName}
            </option>
          ))}
              </select>
            </div>
            <div className='w-full flex flex-col '>
              <button className='bg-green-600 py-2 px-4 text-white lg:text-lg mt-6 rounded-md transition duration-100 hover:shadow-md hover:bg-green-700 mx-auto'>Get result</button>
            </div>
        </form>
        {results && (
  <>
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 bg-green-100 p-4 rounded-md">
      {/* First Place */}
      {results.first ? (
        <div className="flex justify-between items-center border-l-4 px-4">
          <div className="flex gap-2">
            <h1 className="text-green-600 font-thin text-5xl">1</h1>
            <div>
              <h1 className="font-semibold text-2xl">{results.first.name}</h1>
              <h3 className="text-sm text-gray-700">{results.first.team}</h3>
              {/* <p className="text-sm text-gray-500">Grade: {results.first.grade}</p> */}
            </div>
          </div>
          {/* <h1>{results.first.marks}</h1> */}
        </div>
      ): <p className='text-center w-full flex justify-center'>Result is not uploaded yet or you haven't selected your need properly </p> }

      {/* Second Place */}
      {results.second && (
        <div className="flex justify-between items-center border-l-4 px-4">
          <div className="flex gap-2">
            <h1 className="text-green-600 flex rounded-md font-thin text-5xl">2</h1>
            <div>
              <h1 className="font-semibold text-2xl">{results.second.secName}</h1>
              <h3 className="text-sm text-gray-700">{results.second.secTeam}</h3>
              {/* <p className="text-sm text-gray-500">Grade: {results.second.secGrade}</p> */}
            </div>
          </div>
          {/* <h1>{results.second.secMarks}</h1> */}
        </div>
      )}

      {/* Third Place */}
      {results.third && (
        <div className="flex justify-between items-center border-l-4 px-4">
          <div className="flex gap-2">
            <h1 className="text-green-600 flex rounded-md font-thin text-5xl">3</h1>
            <div>
              <h1 className="font-semibold text-2xl">{results.third.thrName}</h1>
              <h3 className="text-sm text-gray-700">{results.third.thrTeam}</h3>
              {/* <p className="text-sm text-gray-500">Grade: {results.third.thrGrade}</p> */}
            </div>
          </div>
          {/* <h1>{results.third.thrMarks}</h1> */}
        </div>
      )}
    </div>
  </>
) }
        
    </div>
  )
}

export default page



// import ResultCard from "@/components/ResultCard";
// import React from "react";
// import { useState, useEffect } from "react";
// import ScrollToTop from "react-scroll-to-top";

// const ResultcardLists = ({ datas }) => {
//   return (
//     <div className="flex flex-col-reverse w-full gap-y-3 mb-4 ">
//       {datas.map((post, index) => {
//         return(
//           <ResultCard post={post} index={index + 1}/>
//         )
        
//     })}
//     </div>
//   );
// };

// const page = () => {
//   const [results, setResults] = useState([]);
//   const [button, setButton] = useState(false)


//   const Navfix = () => {
//     useEffect(() => {
//       const handleScroll = () => {
//         if (window.scrollY >= 50) {
//           setButton(true);
//         } else {
//           setButton(false);
//         }
//       };
//       window.addEventListener('scroll', handleScroll);
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }, []);}

//   const fetchRes = async () => {
//     try {
//       const response = await fetch("/api/results", {
//         cache: "no-store",
//       });
//       const datas = await response.json();
//       setResults(datas);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchRes();
//   }, []);

//   const [category, setCategory] = useState("");
//   const filteredItems = category
//     ? results.filter((zone) => zone.category == category)
//     : results;

//   return (
//     <div className="w-full flex flex-col  px-5 md:px-10 lg:px-10 xl:px-36 pt-32 mb-10">
//       <div className="flex w-full justify-between mb-4 items-center">
//         <h1 className="font-semibold text-2xl text-blue-700">Results</h1>
//         <select
//           value={category}
//           className="border shadow-md rounded-md p-2"
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="">All</option>
//           <option value="B zone">B zone</option>
//           <option value="C zone">C zone</option>
//           <option value="Y zone">Y zone</option>
//           <option value="H zone">H zone</option>
//         <option value="General">General</option>na
//         </select>
//       </div>

//       {results.length !== 0 ? (
//         <>
//           <ResultcardLists datas={filteredItems} />
//         </>
//       ) : (
//         <h1 className="text-md mt-6 text-center">Results not published yet</h1>
//       )}
//         <ScrollToTop smooth height='20' width='20' className='flex items-center justify-center z-50 '/>
//     </div>
//   );
// };

// export default page;
