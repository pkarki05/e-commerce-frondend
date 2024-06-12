import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const user = useSelector(state => state.user.user);

  return user ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
