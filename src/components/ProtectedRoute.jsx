// ProtectedRoute.jsx
import {Navigate, useLocation} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';
import PropType from 'prop-types';

const ProtectedRoute = ({children}) => {
  const {user} = useUserContext();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" replace state={{from: location}} />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropType.node,
};

export default ProtectedRoute;
