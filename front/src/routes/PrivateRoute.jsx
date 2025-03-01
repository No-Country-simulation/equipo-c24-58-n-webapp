import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import PropTypes from "prop-types";

function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
