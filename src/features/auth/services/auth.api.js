import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export const registerUser = async ({ username, email, password }) => {
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Registration failed");
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed");
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.post("/logout");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Logout failed");
  }
};

export const getUser = async () => {
  try {
    const response = await api.get("/get-user");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to fetch user data");
  }
};
