import { Navigate, Outlet } from "react-router-dom";
const isAllowed = false;
export const PrivateRoute = ({
  isAllowed,
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