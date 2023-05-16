import React, { useEffect, useState } from "react";
import { getImg, getStoa, getWeather } from "../api/api";

function useData() {
  const [img, setImg] = useState();
  const [stoa, setStoa] = useState();
  const [weather, setWeather] = useState();

  const images = async () => {
    const data = await getImg();
    setImg(data);
  };

  const stoas = async () => {
    const data = await getStoa();
    setStoa(data);
  };

  const getWeathers = async () => {
    const data = await getWeather();
    setWeather(data);
  };

  useEffect(() => {
    images();
    stoas();
    getWeathers();
  }, []);

  return { img, stoa, images, stoas, weather };
}

export default useData;
