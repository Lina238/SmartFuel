import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const token = localStorage.getItem('token');
  return token!=null ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
