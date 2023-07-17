import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  debugger;
  const token = localStorage.getItem('token');
  const navigate= useNavigate();
  return token ? <Route {...rest} element={<Component />} /> : <Route {...rest}  element={Login}></Route> ;
};

export default ProtectedRoute;
