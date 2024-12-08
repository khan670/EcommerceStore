import React, { useEffect, useState } from "react";
import { RiFileAddFill } from "react-icons/ri";
import Pagination from "../../components/Pagination";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/Users";

interface UserDataType {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const AllUsers: React.FC = () => {
  const [users, setUsers] = useState<UserDataType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  useEffect(() => {
    setUsers(data);
  }, [data]);
  if (isLoading) return <span className="loader"></span>;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const userData = users.slice(indexOfFirstUser, indexOfLastUser);

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
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <table className="w-full">
            <thead className="w-full bg-color-light-gray text-xs md:text-sm  font-medium ">
              <tr className="w-full">
                <th className="py-2">Sr.</th>
                <th className="py-2">Image</th>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Password</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data: UserDataType) =>
                data.name === "Admin" ? null : (
                  <tr className="text-center text-xs md:text-sm py-1 border-b border-b-color-light-gray">
                    <td className="py-1">#{data.id}</td>
                    <td className="py-1">
                      <img
                        loading="lazy"
                        src={data.avatar}
                        alt=""
                        className="mx-auto w-10 h-10 md:w-12 md:h-12 rounded"
                      />
                    </td>
                    <td className="py-1">{data.name}</td>
                    <td className="py-1">{data.email}</td>
                    <td className="py-1">{data.password}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
        <Pagination
          totalPages={data.length / usersPerPage}
          handlePageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AllUsers;
