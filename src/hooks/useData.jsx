import React, { useEffect, useState } from "react";
import { getImg, getStoa } from "../api/api";

function useData() {
  const [img, setImg] = useState();
  const [stoa, setStoa] = useState();

  const images = async () => {
    const data = await getImg();
    setImg(data);
  };

  const stoas = async () => {
    const data = await getStoa();
    setStoa(data);
  };

  useEffect(() => {
    images();
    stoas();
  }, []);

  return { img, stoa, images, stoas };
}

export default useData;
