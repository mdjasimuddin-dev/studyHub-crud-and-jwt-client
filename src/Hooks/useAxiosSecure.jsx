import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://crud-and-jwt-server-nine.vercel.app",
  // baseURL: "http://localhost:5000",
  baseURL: `${import.meta.env.VITE_APP_URL}`,
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
