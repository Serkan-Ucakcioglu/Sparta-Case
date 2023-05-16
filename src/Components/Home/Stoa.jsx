import React from "react";
import useData from "../../hooks/useData";

function Stoa() {
  const { stoa, stoas } = useData();
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-white w-[300px] rounded-lg p-6 shadow-md hover:shadow-2xl">
          <span className="text-black font-bold">{stoa?.author}:</span>

          <p className="text-gray-800">{stoa?.quote}</p>
          <button
            onClick={stoas}
            className="border mt-4 border-blue-500 bg-blue-500 text-white p-2.5 flex items-center text-center justify-center w-[70px] text-sm rounded mt-2 hover:bg-blue-700"
          >
            {" "}
            Changed{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Stoa;
