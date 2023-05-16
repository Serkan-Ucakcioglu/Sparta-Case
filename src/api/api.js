import axios from "axios";

export const getImg = async () => {
  const { data } = await axios.get("https://randomfox.ca/floof/");
  return data;
};

export const getStoa = async () => {
  const { data } = await axios.get(
    "https://api.themotivate365.com/stoic-quote"
  );
  return data;
};

export const getWeather = async () => {
  const { data } = await axios.get(import.meta.env.VITE_API_URL, {
    headers: {
      Authorization: import.meta.env.VITE_API_KEY,
    },
  });
  return data;
};
