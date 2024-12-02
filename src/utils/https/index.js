import axios from "axios";

export const apiGetDashboard = (token) => {
  const URL = import.meta.env.VITE_API_ENDPOINT;
  +"/api/dashboard/iframe";

  const headers = {
    "Content-Type": "application/json",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    Accept: "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE",
    Authorization: `Bearer ${token}`,
  };

  if (token && token.lenght !== 0) return axios.get(URL, { headers });
};
