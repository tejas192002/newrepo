import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = {
    loggedIn: localStorage.getItem("jwtToken") === null,
  };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Navigate to="/Login" /> : <Outlet />;
};

export default ProtectedRoutes;
