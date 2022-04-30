import React from "react";
import data from "../../../jsVSnode.js";

const Blogs = () => {
  return (
    <div className="container my-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="text-3xl my-2">
            Difference between javascript and nodejs
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                JavaScript
              </th>
              <th scope="col" className="px-6 py-3">
                Node JS
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ans) => (
              <tr
                key={ans.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{ans.js}</td>
                <td className="px-6 py-4">{ans.node}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
