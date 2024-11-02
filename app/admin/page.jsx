"use client"

import ResultCard from "@/components/ResultCard";
import React from "react";
import { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

const ResultcardLists = ({ datas }) => {
  return (
    <div className="flex flex-col-reverse w-full gap-y-3 mb-4 ">
      {datas.map((post, index) => {
        return(
          <ResultCard post={post} index={index + 1}/>
        )
        
    })}
    </div>
  );
};

const page = () => {
  const [results, setResults] = useState([]);
  const [button, setButton] = useState(false)


  const Navfix = () => {
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 50) {
          setButton(true);
        } else {
          setButton(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);}

  const fetchRes = async () => {
    try {
      const response = await fetch("/api/results", {
        cache: "no-store",
      });
      const datas = await response.json();
      setResults(datas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRes();
  }, []);

  const [category, setCategory] = useState("");
  const filteredItems = category
    ? results.filter((zone) => zone.category == category)
    : results;

  return (
    <div className="w-full flex flex-col  px-5 md:px-10 lg:px-10 xl:px-36 pt-12 mb-10">
      <div className="flex w-full justify-between mb-4 items-center">
        <h1 className="font-semibold text-2xl text-blue-700">Results</h1>
        <select
          value={category}
          className="border shadow-md rounded-md p-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="B zone">B zone</option>
          <option value="C zone">C zone</option>
          <option value="Y zone">Y zone</option>
          <option value="H zone">H zone</option>
        <option value="General">General</option>na
        </select>
      </div>

      {results.length !== 0 ? (
        <>
          <ResultcardLists datas={filteredItems} />
        </>
      ) : (
        <h1 className="text-md mt-6 text-center">Results not published yet</h1>
      )}
        <ScrollToTop smooth height='20' width='20' className='flex items-center justify-center z-50 '/>
    </div>
  );
};

export default page;