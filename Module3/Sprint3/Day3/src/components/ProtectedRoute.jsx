import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { login } = useContext(AuthContext); //login
	const location = useLocation();

	return login ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;
