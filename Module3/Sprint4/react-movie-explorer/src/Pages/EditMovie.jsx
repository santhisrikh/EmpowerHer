import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const initData = {
	title: "",
	poster: "",
	releaseDate: "",
	genre: "",
	description: "",
};
const EditMovie = () => {
	const [formData, setFormData] = useState(initData);
	const [loading, setLoading] = useState(true);
	const [err, setError] = useState(null);
	const { id } = useParams();
	const navigate = useNavigate();
	// pre fill the edit input fileds
	useEffect(() => {
		console.log(id);
		const fetchMovie = async () => {
			try {
				const response = await axios.get(
					`https://frill-shard-licorice.glitch.me/movies/${id}`,
				);
				setFormData(response.data);
				setLoading(false);
				console.log(response.data);
			} catch (err) {
				setError(err);
				setLoading(false);
				console.log(err, "err");
			}
		};
		fetchMovie();
	}, [id]);
    // 
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleEditMovie = async (e) => {
		e.preventDefault();
		// put request
		try {
			await axios.put(
				`https://frill-shard-licorice.glitch.me/movies/${id}`,
				formData,
			);
			alert("successsfully edited the movie");
			navigate("/movies");
		} catch (err) {
			alert("Failed to edit the movie");
		}
	};
	console.log(formData);
	if (loading) return <p>Loadinggg...</p>;
	return (
		<div>
			<h1>Edit Movie</h1>
			<form action="" onSubmit={handleEditMovie}>
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
				<input type="submit" value="Edit movie" />
			</form>
		</div>
	);
};

export default EditMovie;
