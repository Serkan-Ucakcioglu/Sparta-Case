import React, { useState } from "react";
import useData from "../../../hooks/useData";
import WeatherCard from "./WeatherCard";

function Weather() {
  const { weather } = useData();
  const [index, setIndex] = useState(0);

  const nextDay = () => {
    if (index < weather?.result?.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevDay = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="border shadow hover:shadow-2xl border-gray-300 p-6 rounded shadow hover:border-gray-400">
        <h1 className="text-2xl font-bold text-center">Ankara</h1>
        <div className="flex flex-col items-center">
          {weather?.result?.map((weath, i) => {
            return <WeatherCard i={i} weath={weath} index={index} />;
          })}
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <button
            onClick={prevDay}
            disabled={index == 0}
            className="border border-blue-500 bg-blue-500 text-white p-2 text-sm rounded mt-2 hover:bg-blue-700 disabled:opacity-50"
          >
            Prev Day
          </button>
          <button
            onClick={nextDay}
            disabled={index == weather?.result?.length - 1}
            className="border border-blue-500 bg-blue-500 text-white p-2 text-sm rounded mt-2 hover:bg-blue-700 disabled:opacity-50"
          >
            Next Day
          </button>
        </div>
      </div>
    </>
  );
}

export default Weather;
