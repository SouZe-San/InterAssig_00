import axios from "axios";

const BASE_URL = "http://localhost:5000";

const axi = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});

// Authentication Routes
export const logIn = (authData) => axi.post("/api/user/signin", authData);
export const register = (userData) => axi.post("/api/user/signup", userData);
