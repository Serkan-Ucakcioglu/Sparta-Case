import React from "react";

const UsomTable = ({ data }) => {
  const columns = ["Domain", "Date", "Description"];
  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {columns?.map((column) => {
              return <th className="py-3 px-6 text-left">{column}</th>;
            })}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data?.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{item?.url}</td>
              <td className="py-3 px-6 text-left">{item?.date}</td>
              <td className="py-3 px-6 text-left">{item?.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsomTable;
