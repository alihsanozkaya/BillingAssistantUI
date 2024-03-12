import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.auth);

    var token =  localStorage.getItem("token")
  if ( token) {
   
    return children ;
  } else {
    return <Navigate to="/login" replace />;
  }
};
export default PrivateRoute;