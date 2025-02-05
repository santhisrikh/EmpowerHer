import React, { useRef } from "react";

const FeedbackForm = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const handleSubmit = () => {
		console.log(nameRef.current.value);
		console.log(emailRef.current.value);
		if (!nameRef.current.value) {
			nameRef.current.style.borderColor = "red";
		}
		if (!emailRef.current.value) {
			emailRef.current.style.borderColor = "red";
		} else {
			alert("Feedback submitted successfully");
		}
	};
	return (
		<div>
			<input type="text" placeholder="Enter name" ref={nameRef} />
			<input type="email" placeholder="Enter Email" ref={emailRef} />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default FeedbackForm;
