import Fox from "./Fox";
import Stoa from "./Stoa";

function Home() {
  return (
    <div className="w-full flex  flex-col items-center justify-center">
      <div className="w-[800px] flex justify-between">
        <Fox />
        <Stoa />
      </div>
    </div>
  );
}

export default Home;
