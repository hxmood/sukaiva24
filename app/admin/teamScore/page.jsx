"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [totalPoints, setTotalPoints] = useState(null);
  const [afterResult, setAfterResult] = useState([])
  const afterResults = async () => {
    const response = await fetch("/api/results")
    const data = await response.json()
    setAfterResult(data)
    console.log(afterResult);
    

  }
  const fetchRes = async () => {
    try {
      const response = await fetch("/api/teamPoints", {
        cache: "no-store",
      });
      const datas = await response.json();
      setTotalPoints(datas);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRes();
    afterResults()
  }, []);

  const sortedTeams = totalPoints
    ? Object.entries(totalPoints).sort(([, a], [, b]) => b - a)
    : [];
  const teamColors = {
    "Legacy Legends": "text-blue-700",
    "Ancient Alliance": "text-green-700",
    "Traditional Trackers": "text-red-700",
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      for (const [team, points] of sortedTeams) {
        await fetch("/api/updatePoints", {
          method: "PUT",
          body: JSON.stringify({
            team: team,
            points: points,
          }),
        });
      }
      const afterUpdate = afterResult.length
      const response = await fetch("/api/afterPoints", {
        method: "PUT",
        body: JSON.stringify({
          after: afterUpdate
        })
      })

      alert("points updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex px-3 md:px-10 lg:px-10 xl:px-36 pt-32 flex-col space-y-4 justify-center">
      <h1 className="text-xl text-green-700">After <span>#{afterResult.length}</span></h1>
      {sortedTeams.map(([team, points]) => (
        <div className="flex  text-4xl font-bold mt-12">
          <h1 className="mr-4">{team}:</h1>
          <h1 className={`${teamColors[team]}`}>{points}</h1>
        </div>
      ))}

      <button
        className="bg-green-800 font-semibold px-3 py-2 text-white"
        onClick={handleUpdate}
      >
        Update points
      </button>
    </div>
  );
};

export default page;
