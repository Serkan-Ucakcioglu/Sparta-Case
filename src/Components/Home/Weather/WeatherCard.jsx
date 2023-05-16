import React from "react";

function WeatherCard({ i, index, weath }) {
  return (
    <>
      {i == index && (
        <>
          <span>{weath?.date}</span>
          <img src={weath?.icon} alt="" className="w-8 h-8" />
        </>
      )}
    </>
  );
}

export default WeatherCard;
