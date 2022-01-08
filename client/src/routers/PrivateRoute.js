import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PrivateRoute = ({ children }) => {
  const {user} = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
};



export default PrivateRoute;
