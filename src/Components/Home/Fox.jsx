import React from "react";
import useData from "../../hooks/useData";

function Fox() {
  const { img, images } = useData();
  return (
    <>
      <div className="fox flex h-[264px] flex-col items-center border border-gray-300 p-2 rounded">
        <img src={img?.image} alt="images" className="w-[250px] h-[200px]" />
        <button
          onClick={images}
          className="border border-blue-500 bg-blue-500 text-white p-2 text-sm rounded mt-2 hover:bg-blue-700"
        >
          Changed
        </button>
      </div>
    </>
  );
}

export default Fox;
