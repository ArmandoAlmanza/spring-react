import axios from "./axios";
// Get users request
export const getUsers = async () => await axios.get("/users");

export const getUser = async (id) => await axios.get("/users/" + id);
// createUsers
export const newUser = async (user) => await axios.post("/users", user);
// Update User
export const updateUser = async (id, user) => {
    await axios.put("/users/" + id, user);
};
// Delete User
export const deleteUser = async (id) => {
    await axios.delete("/users/" + id);
};
