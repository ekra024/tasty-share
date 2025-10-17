import React from 'react';
import useAuth from '../hooks/useAuth';
import LoaddingPage from '../pages/OtherPage/LoaddingPage';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {loadding, user} = useAuth();

  const location = useLocation();
  if(loadding) return <LoaddingPage />

  if(user && user?.email) return children;

  return <Navigate state={location?.pathname} to="/signIn" />
};

export default PrivateRoute;