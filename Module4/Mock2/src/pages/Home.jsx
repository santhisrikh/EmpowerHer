import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducer";

import Login from "./Login";
import "../styles/Home.css"; // Import CSS file
import AddNote from "../components/Addnotes";
import NoteList from "../components/NoteList";

const Home = () => {
	const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();

	return (
		<div className="home-container">
			<h1 className="home-title">Collaborative Notes</h1>
			{user ? (
				<div>
					{/* <button className="logout-button" onClick={() => dispatch(logout())}>
						Logout
					</button> */}
					<AddNote />
					<NoteList />
				</div>
			) : (
				// <Login />
				<>Login</>
			)}
		</div>
	);
};

export default Home;
