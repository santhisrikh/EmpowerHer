import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(true);
	const [err, setError] = useState(null);
	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const response = await axios.get(
					`https://frill-shard-licorice.glitch.me/movies/${id}`,
				);
				console.log(response);
				setMovie(response.data);
				setLoading(false);
			} catch (err) {
				setError(err);
			}
		};
		fetchMovie();
	}, [id]);
	if (loading) return <p>Loading...</p>;
	if (err) return <p>{err}</p>;
	return (
		<div className="movie-details-container">
			<h1>{movie.title}</h1>
			<img src={movie.poster} alt={movie.title} />
			<p>{movie.description}</p>
            <p>{movie.releaseDate}</p>
            <p>{movie.genre}</p>
		</div>
	);
};

export default MovieDetails;
