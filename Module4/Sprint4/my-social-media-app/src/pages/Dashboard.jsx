import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
	const user = useSelector((state) => state.user);
	console.log(user);
	return <div>{user && <h1>{user.email}</h1>}</div>;
};

export default Dashboard;
