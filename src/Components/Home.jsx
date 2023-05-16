import React from "react";
import { getImg } from "../api/api";

async function Home() {
  const data = await getImg();
  return (
    <div>
      <div className="fox">
        <img src={data?.image} alt="images" />
      </div>
    </div>
  );
}

export default Home;
