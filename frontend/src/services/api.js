import axios from "axios";

const api = axios.create({
  baseURL: "https://contractor-backend-9qa0.onrender.com",
});

export default api;