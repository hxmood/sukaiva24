"use client";

import React, { useEffect } from "react";
import { useState } from "react";

const page = () => {
  const [totalPoints, setTotalPoints] = useState(null);
  const [afterResult, setAfterResult] = useState([])
  
  const handlePublish = async () => {
    try {
      for (const [team, points] of sortedTeams) {
        await fetch("/api/publishPoints", {
          method: "POST",
          body: JSON.stringify({
            team,
            points,

          }),
        });
      }
      const after = afterResult.length
      const publishAfter = await fetch("/api/afterPoints", {
        method: "POST", 
        body: JSON.stringify({
          after: after
        })
      })
      alert("Results published successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error publishing results. Please try again.");
    }
  };

  const fetchRes = async () => {
    try {
      const response = await fetch("/api/teamPoints", {
        cache: "no-store"
      });
      const datas = await response.json();
      setTotalPoints(datas);
    } catch (error) {
      console.log(error);
    }
  };

  const afterResults = async () => {
    const response = await fetch("api/results")
    const data = await response.json()
    setAfterResult(data)

  }

  useEffect(() => {
    fetchRes();
    afterResults()
  }, []);

  const sortedTeams = totalPoints ? Object.entries(totalPoints).sort(([, a], [, b]) => b - a): [];
  
  const teamColors = {
    "De Zegians": "text-blue-700",
    "Le Hegians": "text-green-700",
    "En Shugians": "text-red-700",
  };

  return (
    <div className="flex flex-col px-3 md:px-10 lg:px-10 xl:px-36 pt-32 space-y-4 justify-center">
      <h1 className="text-xl text-green-600">After <span>#{afterResult.length}</span></h1>
      {sortedTeams.map(([team, points]) => (
        <div className="flex text-4xl font-bold mt-12">
          <h1 className="mr-4">{team}:</h1>
          <h1 className={`${teamColors[team]}`}>{points}</h1>
        </div>
      ))}
      <button
        onClick={handlePublish}
        className="bg-green-900 text-white px-4 py-3 w-fit font-semibold"
      >
        Publish
      </button>
    </div>
  );
};

export default page;
