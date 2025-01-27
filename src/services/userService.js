import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => axios.get(API_URL);

export const addUser = (user) => axios.post(API_URL, user);

export const updateUser = (userId, updatedData) =>
  axios.put(`${API_URL}/${userId}`, updatedData);

export const deleteUser = (userId) => axios.delete(`${API_URL}/${userId}`);
