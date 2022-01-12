import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import roles from "../helpers/Roles";
import routes from "../helpers/Routes";


const PrivateRoute = ({hasRole: role , children}) => {
  const {hasRole, isLogged} = useAuth();
  if (role && hasRole(roles.regular)) return <Navigate to={routes.home} />;
  if (!isLogged()) return <Navigate to={{pathname:routes.login}} />;
  return children;
};



export default PrivateRoute;
