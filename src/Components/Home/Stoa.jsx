import React from "react";
import useData from "../../hooks/useData";

function Stoa() {
  const { stoa, stoas } = useData();
  return (
    <>
      <div className="flex">
        <span>{stoa?.author}:</span>
        <p>{stoa?.quote}</p>
        <button onClick={stoas}>değiştir</button>
      </div>
    </>
  );
}

export default Stoa;
