import { NavLink } from "react-router-dom";
import Fox from "./Fox";
import Stoa from "./Stoa";
import Weather from "./Weather/Weather";
import ArrowRight from "../../assets/ArrowRight";

function Home() {
  return (
    <div className="w-full flex mt-10 flex-col items-center justify-center">
      <div className="w-[900px] flex items-center justify-between">
        <Fox />
        <Weather />
      </div>
      <div className="mt-8">
        <Stoa />
      </div>
      <div className="flex mt-10">
        <NavLink
          to="/usom"
          className="bg-blue-500 flex items-center flex-row gap-x-3 hover:bg-blue-700 p-2 rounded text-white"
        >
          Usom Page
          <ArrowRight />
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
