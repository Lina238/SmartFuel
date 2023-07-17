import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token');

  return token ? <Route {...rest} element={<Component />} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
