import React, { useEffect, useState } from "react";
import { logOut, signInWithGoogle } from "./firebaseAuth";
import Todo from "./components/todo";

const App = () => {
	const [user, setUser] = useState(null);
	console.log(user);
	useEffect(() => {
		// load user from local storage
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);
	const handleLogin = async () => {
		const user = await signInWithGoogle();
		if (user) {
			setUser(user);
		}
		console.log(user);
	};
	const handleLogout = async () => {
		await logOut();
		setUser(null);
	};
	return (
		<div>
			<h1>Firebase React App</h1>
			{user ? (
				<div>
					<h3>Welcome {user.displayName}</h3>
					<p>Email : {user.email}</p>
					<img src={user.photoURL} alt="" />
					<button onClick={handleLogout}>Logout</button>
				</div>
			) : (
				<button onClick={handleLogin}>Login With Google</button>
			)}
			<Todo />
		</div>
	);
};

export default App;

// const todosFirebase = {
// 	id1: { task: "fghjk", completed: false },
// 	id1: { task: "fghjk", completed: false },
// };
// Object.entries(todosFirebase)
// result = [
// 	[id1, { task: "fghjk", completed: false }],
// 	[id1, { task: "fghjk", completed: false }],
// 	[
// ];
// result.map(todo=>{id:todo[0],...todo[1]})
// const todosReact = [{id:"fghj",task:"hjkl",completed:false},{},{}]