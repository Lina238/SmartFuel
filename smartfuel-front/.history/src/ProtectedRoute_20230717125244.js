import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  debugger;
  const token = localStorage.getItem('token');

  return token ? <Route {...rest} element={<Component />} /> : <Route element={()=>{
   const useNavigate();
  }}></Route> ;
};

export default ProtectedRoute;
