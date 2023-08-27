import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

function MemberRoutes() {
  const { sessionUser, isAuthenticated } = useSelector((state) => state.sessionSlice);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default MemberRoutes;
