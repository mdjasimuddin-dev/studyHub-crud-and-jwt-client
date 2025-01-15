import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRouter = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();

  if (loader) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-9xl loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <Navigate state={location.pathname} to="/login" replace={true}></Navigate>
  );
};

export default PrivateRouter;
