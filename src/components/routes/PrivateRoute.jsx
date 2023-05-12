import { Navigate, Outlet, useLocation } from "react-router-dom";
import Login from "../../views/Login/LoginPage";

const PrivateRoute = ({ redirectTo = "/Login", children }) => {
  const token = localStorage.getItem("token");
  const isAllowed = !!token; // Verifica si el token existe y no es vacío
  const location = useLocation();

  if (!isAllowed && location.pathname !== redirectTo) {
    return (
      <>
        <Navigate to={redirectTo} replace />;
        <Login /> {/* Mostrar el componente de inicio de sesión */}
      </>
    );
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;





