import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";

const ResultsView = () => {
  const [results, setResults] = useState([]);
  const fetchRes = async () => {
    try {
      const response = await fetch("/api/results");
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.log(results);
    }
  };
  useEffect(() => {
    fetchRes();
  }, []);
  return (
    <div className="flex flex-col w-full px-4">
      {results.map((result, index) => (
        <>
          <div className="flex w-full justify-between font-bold mt-4">
            <h1>{result.res}</h1>
            <h1>{result.category}</h1>
          </div>
          <div className="flex w-full px-4 items-center justify-center">
            <div className="flex justify-between basis-3/4 mt-4">
              <div className="flex">
                <h1 className="mr-2">{index}</h1>
                <h1>{result.first.name}</h1>
              </div>
              <h1>{result.first.grade}</h1>
              <h1>{result.first.marks}</h1>
              <h1>{result.first.team}</h1>
            </div>

            <div className="flex basis-1/4 justify-end mt-4 gap-3">
                <Link href='/'>
                    <BorderColorIcon />
                </Link>

                <Link href='/'>
                    <DeleteIcon />
                </Link>
            </div>
          </div>
          <hr className="mt-6" />
        </>
      ))}
        <ScrollToTop smooth height='20' width='20' className='flex items-center justify-center z-50 '/>
    </div>
  );
};

export default ResultsView;
