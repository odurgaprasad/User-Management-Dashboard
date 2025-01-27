import React from "react";
import { UserProvider } from "./context/UserContext";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <UserProvider>
      <div className="bg-gray-800 text-white min-h-screen p-6">
        <h1 className="text-4xl font-bold text-yellow-500 text-center py-4">
          User Management Dashboard
        </h1>
        <UserList />
        <UserForm />
      </div>
    </UserProvider>
  );
};

export default App;
