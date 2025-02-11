import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/actions/actions";

const Theme = () => {
	const theme = useSelector((state) => state.theme.darkMode);
	const dispatch = useDispatch();
	return (
		<div>
			<p>Current Theme : {theme ? "Dark Mode" : "Light Mode"}</p>
			<button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
		</div>
	);
};

export default Theme;
