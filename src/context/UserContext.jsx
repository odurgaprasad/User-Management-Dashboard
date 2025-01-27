import React, { createContext, useState, useEffect } from "react";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../services/userService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      const userData = response.data;
      const repeatedUsers = [
        ...userData,
        ...userData,
        ...userData,
        ...userData,
      ];
      const uniqueUsers = repeatedUsers.map((user, index) => ({
        ...user,
        id: index + 1,
      }));
      setUsers(uniqueUsers.slice(0, 100));
    } catch (err) {
      setError("Failed to fetch users");
    }
  };

  const handleAddUser = async (user) => {
    try {
      const response = await addUser(user);
      setUsers([...users, { ...response.data, id: users.length + 1 }]);
    } catch (err) {
      setError("Failed to add user");
    }
  };

  const handleEditUser = async (userId, updatedUser) => {
    try {
      const response = await updateUser(userId, updatedUser);
      setUsers(
        users.map((user) => (user.id === userId ? response.data : user))
      );
    } catch (err) {
      setError("Failed to update user");
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError("Failed to delete user");
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <UserContext.Provider
      value={{
        users: currentUsers,
        selectedUser,
        error,
        handleAddUser,
        handleEditUser,
        handleDeleteUser,
        setSelectedUser,
        paginate,
        currentPage,
        totalPages: Math.ceil(users.length / usersPerPage),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
