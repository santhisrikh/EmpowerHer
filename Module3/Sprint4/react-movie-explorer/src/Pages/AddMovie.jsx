import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const initData = {
	title: "",
	poster: "",
	releaseDate: "",
	genre: "",
	description: "",
};

const AddMovie = () => {
	const [formData, setFormData] = useState(initData);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleAddMovie = async (e) => {
		e.preventDefault();
		console.log(formData);
		try {
			await axios.post(
				"https://frill-shard-licorice.glitch.me/movies",
				formData,
			);
			navigate("/movies");
		} catch (err) {
			alert("Failed to add movie details");
		}
	};
	return (
		<div>
			<h1>Add Movie</h1>
			<form action="" onSubmit={handleAddMovie}>
				<input
					type="text"
					placeholder="Enter Title"
					value={formData.title}
					name="title"
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Enter Poster URL"
					value={formData.poster}
					name="poster"
					onChange={handleChange}
				/>
				<input
					type="date"
					placeholder="Enter Release Date"
					value={formData.releaseDate}
					name="releaseDate"
					onChange={handleChange}
				/>{" "}
				<input
					type="text"
					placeholder="Enter Genre"
					onChange={handleChange}
					value={formData.genre}
					name="genre"
				/>
				<textarea
					type="text"
					placeholder="Enter Description"
					value={formData.description}
					name="description"
					onChange={handleChange}
				/>
				<input type="submit" value="add movie" />
			</form>
		</div>
	);
};

export default AddMovie;
