import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    //protected route logic here
    let isAuthenticate = false;
  return (
    isAuthenticate ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default ProtectedRoute