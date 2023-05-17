import React, { useEffect, useState } from "react";
import { usomDesc } from "../../api/api";

const UsomTable = ({ data }) => {
  const [desc, setDesc] = useState();
  const usomDescriptions = async () => {
    const data = await usomDesc();
    setDesc(data?.models);
  };

  useEffect(() => {
    usomDescriptions();
  }, []);
  const columns = ["Domain", "Date", "Description"];
  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {columns?.map((column) => {
              return <th className="py-3 px-6 text-left ml-5">{column}</th>;
            })}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data?.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left font-bold font-mono">
                {item?.url}
              </td>
              <td className="py-3 px-6 text-left text-medium font-semibold">
                {item?.date}
              </td>
              <td className="py-3 px-6 text-left text font-serif">
                {desc
                  ?.filter((usom) => usom?.id === item?.desc)
                  ?.map((usom) => {
                    return <td className="py-3">{usom?.tr_desc}</td>;
                  })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsomTable;
