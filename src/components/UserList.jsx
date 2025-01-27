import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserList = () => {
  const {
    users,
    handleDeleteUser,
    setSelectedUser,
    paginate,
    currentPage,
    totalPages,
  } = useContext(UserContext);

  return (
    <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-lg">
      <table className="min-w-full table-fixed text-white">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-4 py-2 text-left w-1/12">ID</th>
            <th className="px-4 py-2 text-left w-2/12">First Name</th>
            <th className="px-4 py-2 text-left w-2/12">Last Name</th>
            <th className="px-4 py-2 text-left w-3/12">Email</th>
            <th className="px-4 py-2 text-left w-2/12">Department</th>
            <th className="px-4 py-2 text-left w-2/12">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-600">
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-500">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name.split(" ")[0]}</td>
              <td className="px-4 py-2">{user.name.split(" ")[1]}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.company.name}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => setSelectedUser(user)}
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 focus:outline-none"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center py-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-yellow-500 text-black"
                : "bg-gray-500 text-white"
            } hover:bg-yellow-400 focus:outline-none`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
