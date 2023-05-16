import axios from "axios";

const getImg = async () => {
  const { data } = await axios.get("https://randomfox.ca/floof/");

  return data;
};

const getStoa = async () => {
  const { data } = await axios.get(
    "https://api.themotivate365.com/stoic-quote"
  );
  return data;
};
