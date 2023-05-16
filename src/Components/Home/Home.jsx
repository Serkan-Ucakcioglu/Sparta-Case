import Fox from "./Fox";
import Stoa from "./Stoa";
import Weather from "./Weather/Weather";

function Home() {
  return (
    <div className="w-full flex mt-8 flex-col items-center justify-center">
      <div className="w-[900px] flex justify-between">
        <Fox />
        <Stoa />
      </div>
      <Weather />
    </div>
  );
}

export default Home;
