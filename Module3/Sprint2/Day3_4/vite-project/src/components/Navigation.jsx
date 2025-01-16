import React, { useState } from "react";

const data = [
	{ id: 1, btnText: "Home", content: "Home Content" },
	{ id: 2, btnText: "About", content: "About Content" },
	{ id: 3, btnText: "Contact", content: "Contact Content" },
];
let content;
export default function Navigation() {
	const [activeContent, setActiveContent] = useState(data[0]);
	const handleClick = (id) => {
		const activeObj = data.find((ele) => ele.id == id);
		setActiveContent(activeObj);
	};

	return (
		<>
			<div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
				{data.map((ele) => {
					return (
						<button
							key={ele.id}
							style={{
								backgroundColor: ele.id == activeContent.id && "red",
								padding: "10px",
								border: "none",
							}}
							onClick={() => handleClick(ele.id)}
						>
							{ele.btnText}
						</button>
					);
				})}
			</div>
			<div style={{ textAlign: "center", margin: "20px" }}>
				{activeContent?.content}
			</div>
		</>
	);
}
