import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const Protected = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading fullScreen={true} message="Verifying access..." />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default Protected;
