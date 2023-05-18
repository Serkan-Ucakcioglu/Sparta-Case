import React, { useEffect, useState } from "react";
import { usomDesc } from "../../api/api";

const columns = ["Domain", "Date", "Description", "Detail"];
const selectbox = [".com", ".xyz", ".net", ".info"];

const UsomTable = ({ data }) => {
  const [desc, setDesc] = useState();
  const [select, setSelect] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (select !== "") {
      const filtered = data?.filter((item) => item?.url?.includes(select));
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, select]);

  useEffect(() => {
    setFilteredData(!show ? data : data?.filter((item, i) => i <= 10));
    usomDescriptions();
  }, []);

  const usomDescriptions = async () => {
    const data = await usomDesc();
    setDesc(data?.models);
  };

  const toggleExpansion = () => {
    setShow((prev) => !prev);
    setFilteredData(show ? data : data?.slice(0, 10));
  };

  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-[500px] max-w-[1500px] w-full table-auto">
        {/* Table Head*/}
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {columns?.map((column) => {
              return <th className="py-3 px-6 text-left ml-5">{column}</th>;
            })}
            <td className="mb-1">
              <select
                className="bg-gray-200 border-2 border-white text-gray-600 mt-2 p-1 rounded mr-2"
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="" selected>
                  Genel
                </option>
                {selectbox?.map((option) => {
                  return <option value={option}>{option}</option>;
                })}
              </select>
            </td>
          </tr>
        </thead>
        {/* Table Body*/}
        <tbody className="text-gray-600 text-sm font-light">
          {!!filteredData?.length ? (
            filteredData?.map((item) => (
              <tr
                key={item?.id}
                className="border-b p-2 border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left font-extrabold font-mono">
                  {item?.url}
                </td>
                <td className="py-3 px-6 text-left text-medium font-semibold">
                  {item?.date}
                </td>
                <td className="py-3 px-6 text-left text font-serif">
                  {desc
                    ?.filter((usom) => usom?.id === item?.desc)
                    ?.map((usom) => {
                      return <>{usom?.tr_desc}</>;
                    })}
                </td>
              </tr>
            ))
          ) : (
            <td className="px-6 p-2 text-2xl font-bold text-center">
              {select} Uzantılı domain bulunamadı.
            </td>
          )}
          {/* Table Footer*/}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className="text-center py-2">
              {select == "" && (
                <button
                  onClick={toggleExpansion}
                  className="border border-blue-500 bg-blue-500 rounded hover:bg-blue-700 text-white p-1"
                >
                  {show ? "Genişlet" : "Daralt"}
                </button>
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UsomTable;
