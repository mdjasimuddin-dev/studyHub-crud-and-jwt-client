import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://crud-and-jwt-server-nine.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
