import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const UserForm = () => {
  const { handleAddUser, handleEditUser, selectedUser, setSelectedUser } =
    useContext(UserContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    company: { name: "" },
  });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ name: "", email: "", company: { name: "" } });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "company.name") {
      setUser((prevState) => ({ ...prevState, company: { name: value } }));
    } else {
      setUser((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      handleEditUser(selectedUser.id, user);
    } else {
      handleAddUser(user);
    }
    setUser({ name: "", email: "", company: { name: "" } });
    setSelectedUser(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 p-6 rounded-lg shadow-lg my-4 flex flex-col space-y-4 max-w-xl mx-auto"
    >
      <h2 className="text-2xl text-center text-white mb-4">
        {selectedUser ? "Edit User" : "Add New User"}
      </h2>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="px-4 py-2 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        className="px-4 py-2 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />
      <input
        name="company.name"
        value={user.company.name}
        onChange={handleChange}
        placeholder="Department"
        className="px-4 py-2 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        required
      />
      <button
        type="submit"
        className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        {selectedUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
