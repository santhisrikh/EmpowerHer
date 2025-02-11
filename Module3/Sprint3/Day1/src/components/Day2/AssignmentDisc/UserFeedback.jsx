import React, { useState } from "react";

export default function UserFeedback() {
	const [formData, setFormData] = useState({
		id: 1,
		comments: "",
		rating: 0,
		recommended: false,
	});
	const [data, setData] = useState([]);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [ratingError, setRatingError] = useState(null);
	const [commentError, setCommentError] = useState(null);

	const handleInput = (e) => {
		let { name, value, type, checked } = e.target;
		if (type == "checkbox") {
			setFormData((prevData) => ({ ...prevData, [name]: checked }));
		} else {
			setFormData((prevData) => ({ ...prevData, [name]: value }));
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.rating) {
			setRatingError("Please rate from 1-5");
			true;
		} else if (!formData.comments) {
			setCommentError("Please take a moment and leave the feedback");
		} else {
			setIsFormSubmitted(true);
		}
		setData((prevData) => [...prevData, formData]);
		console.log(formData, "formData");
	};
	console.log(data.length);
	return (
		<div>
			{isFormSubmitted ? (
				data?.map((ele) => {
					return (
						<div>
							<h1>Comments{ele.comments}</h1>
							<h2>Rating : {ele.rating}</h2>
							<p>{ele.recommended ? "Recommended" : "not recommended"}</p>
						</div>
					);
				})
			) : (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="comments"
						value={formData.comments}
						placeholder="add comments"
						onChange={handleInput}
					/>
					{commentError && <h1 style={{ color: "red" }}>{commentError}</h1>}
					{[1, 2, 3, 4, 5].map((ele) => {
						return (
							<React.Fragment key={ele}>
								<label>{ele}</label>
								<input
									type="radio"
									name="rating"
									value={ele}
									onChange={handleInput}
									checked={formData.rating == ele}
								/>
							</React.Fragment>
						);
					})}
					{ratingError && <h1 style={{ color: "red" }}>{ratingError}</h1>}
					<input
						type="checkbox"
						name="recommended"
						checked={formData.recommended}
						onChange={handleInput}
					/>
					<input type="submit" value="submit" />
				</form>
			)}
		</div>
	);
}
