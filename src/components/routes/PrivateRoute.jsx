import { Navigate, Outlet } from "react-router-dom";
const isAllowed = localStorage.getItem("token");
export const PrivateRoute = ({
  redirectTo = "/Login",
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

export default PrivateRoute;