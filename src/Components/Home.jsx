import useData from "../hooks/useData";

function Home() {
  const { stoa, img, images, stoas } = useData();

  return (
    <div className="w-full flex  flex-col items-center justify-center">
      <div className="fox flex flex-col items-center border border-gray-300 p-3">
        <img src={img?.image} alt="images" className="w-[250px] h-[200px]" />
        <button
          onClick={images}
          className="border border-blue-500 bg-blue-500 text-white p-2 text-sm rounded mt-2 hover:bg-blue-700"
        >
          Changed
        </button>
      </div>
    </div>
  );
}

export default Home;
