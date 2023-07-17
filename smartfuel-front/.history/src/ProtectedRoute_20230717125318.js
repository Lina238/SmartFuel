import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  debugger;
  const token = localStorage.getItem('token');
  const navigate= useNavigate();
  return token ? <Route {...rest} element={<Component />} /> : <Route element={()=>{
  
   navigate("/")
  }}></Route> ;
};

export default ProtectedRoute;
