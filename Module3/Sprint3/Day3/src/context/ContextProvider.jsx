import React, { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
	const [login, setLogin] = React.useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location.state, "location");
	const handleLogin = () => {
		setLogin(true);
		navigate("/");
	};
	const handleLogout = () => {
		setLogin(false);
		navigate("/login");
	};
	return (
		<AuthContext.Provider value={{ login, handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default ContextProvider;

// useSearchParams
// useParams
