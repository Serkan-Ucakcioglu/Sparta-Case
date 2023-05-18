import React, { useEffect, useState } from "react";
import { getUsom } from "../../api/api";
import UsomTable from "./UsomTable";

function Usom() {
  const [page, setPage] = useState(0);
  const [usom, setUsom] = useState();

  const getUsoms = async () => {
    const data = await getUsom(page);
    setUsom(data?.models);
  };
  useEffect(() => {
    getUsoms(page);
    document.title = "Usom List";
  }, [page]);
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="flex justify-center items-center gap-x-3">
        <button
          onClick={() => setPage((page) => page - 1)}
          disabled={page == 0}
          className="border border-blue-500 bg-blue-500 text-white p-2 text-sm rounded mt-2 hover:bg-blue-700 disabled:opacity-50"
        >
          Prev Page
        </button>
        <button
          onClick={() => setPage((page) => page + 1)}
          className="border border-blue-500 bg-blue-500 text-white p-2 text-sm rounded mt-2 hover:bg-blue-700 disabled:opacity-50"
        >
          Next Page
        </button>
      </div>
      <div className="min-w-[500px]">
        {usom?.length > 1 && <UsomTable data={usom} />}
      </div>
    </div>
  );
}

export default Usom;
