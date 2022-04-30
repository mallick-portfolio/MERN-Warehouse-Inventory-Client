import React from "react";
import data from "../../../jsVSnode.js";
import sqlVsNosql from "../../../sqlVSnosql.js";

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
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="text-3xl my-2">
            Differences between sql and nosql databases.
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SQL
              </th>
              <th scope="col" className="px-6 py-3">
                NoSql
              </th>
            </tr>
          </thead>
          <tbody>
            {sqlVsNosql.map((ans) => (
              <tr
                key={ans.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{ans.sql}</td>
                <td className="px-6 py-4">{ans.nosql}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full text-gray-500 my-4 px-4">
          <h3 className="text-3xl ">What is the purpose of jwt</h3>
          <p className="text-sm ">
            Instead of storing information on the server after authentication,
            JWT creates a JSON web token and encodes, sterilizes, and adds a
            signature with a secret key that cannot be tampered with. This key
            is then sent back to the browser. Each time a request is sent, it
            verifies and sends the response back.
          </p>
        </div>
        <div className="w-full text-gray-500 my-4 px-4">
          <h3 className="text-3xl ">How does JWT work</h3>
          <p className="text-sm ">
            JWT differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
