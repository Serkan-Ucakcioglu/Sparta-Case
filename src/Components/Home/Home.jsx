import Fox from "./Fox";
import Stoa from "./Stoa";
import Weather from "./Weather/Weather";

function Home() {
  return (
    <div className="w-full flex mt-8 flex-col items-center justify-center">
      <div className="w-[900px] flex items-center justify-between">
        <Fox />
        <Weather />
      </div>
      <div className="mt-8">
        <Stoa />
      </div>
    </div>
  );
}

export default Home;
