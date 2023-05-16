import React from "react";

function WeatherCard({ i, index, weath }) {
  return (
    <>
      {i == index && (
        <>
          <span className="text-m font-semibold mt-2">
            🗓️ {weath?.day} {weath?.date}
          </span>

          <img src={weath?.icon} alt="" className="w-[100px] h-[100px]" />
          <span>{weath?.description}</span>
        </>
      )}
    </>
  );
}

export default WeatherCard;
