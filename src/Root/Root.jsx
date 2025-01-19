import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Root = () => {
  return (
    <div className="lg:mx-28">
      <Navbar />
      <Outlet />
      
    </div>
  );
};

export default Root;
