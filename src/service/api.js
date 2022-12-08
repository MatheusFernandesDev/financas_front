import axios from "axios";
import Cookies from "js-cookie";

export const api_uri = process.env.REACT_APP_API_URI;
const token = Cookies.get("token");
const api = axios.create({
  baseURL: api_uri,
  timeout: 29000,
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default api;
