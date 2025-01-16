import React, { useEffect, useState } from "react";

export default function UsersDisplay() {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users`)
			.then((response) => response.json())
			.then((res) => setData(res));
	}, []);

	return (
		<div>
			<h1>Welcome to the Users Dashboard</h1>
			{!data && <h1>Loading....</h1>}
			{data &&
				data.map((ele) => {
					return (
						<div key={ele.id}>
							<h1 onClick={handleId}>Name:{ele.name}</h1>
							<h3>Username:{ele.username}</h3>
						</div>
					);
				})}
		</div>
	);
}
// axios
// some application
// todos
// crud application

// css ,module.css
// global scope ,local scope
// direct,object
// useEffect(()=>{},[]) => initial render
// useEffect(()=>{},[state,props]) => updatinh phase
// useEffect(()=>{ return ()=>{cleanup funtion}},[])
// fetch request =>inityal render and display =>
// 
