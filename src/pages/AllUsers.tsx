import React from "react";
import { RiFileAddFill } from "react-icons/ri";
import Pagination from "../components/Pagination";

const AllUsers: React.FC = () => {
  return (
    <div>
      {" "}
      <div className="p-4">
        <h1 className="text-base uppercase font-bold flex items-center gap-2 ">
          <RiFileAddFill size={20} />
          Add Category
        </h1>
      </div>
      <hr />
      <div className="p-4">
        <table className="w-full">
          <thead className="w-full bg-color-light-gray text-sm  font-medium ">
            <tr className="w-full">
              <th className="py-2">Sr.</th>
              <th className="py-2">Image</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Password</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((_) => (
              <tr className="text-center text-sm py-1 border-b border-b-color-light-gray">
                <td className="py-1">#1</td>
                <td className="py-1">
                  <img
                    src="https://i.imgur.com/LDOO4Qs.jpg"
                    alt=""
                    width={50}
                    height={50}
                    className="mx-auto rounded"
                  />
                </td>
                <td className="py-1">Jhon</td>
                <td className="py-1">john@mail.com</td>
                <td className="py-1">changeme</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination totalPages={5} />
      </div>
    </div>
  );
};

export default AllUsers;
