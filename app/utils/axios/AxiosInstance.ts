import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/api/";
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

// export const https = {
//   get: axios.get(""),
//   post: axios.post(""),
//   patch: axios.patch(""),
//   delete: axios.delete(""),
// };

export default axiosInstance;
