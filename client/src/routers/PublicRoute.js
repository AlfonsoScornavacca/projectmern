import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PublicRoute = ({ children }) => {
  const {isLogged} = useAuth();
  // eslint-disable-next-line no-undef
  if (isLogged()) return <Navigate to="/projects" />;
  return children;
};



export default PublicRoute;
