import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import { useNavigate } from "react-router-dom";
import "../styles/Movies.css";
const MovieScroller = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [genre, setGenre] = useState("");
	const [page, setPage] = useState(1);
	const [limit] = useState(8);
	const [hasMore, setHasMore] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		// setLoading(true)
		const fetchMovies = async () => {
			try {
				const response = await axios.get(
					`https://frill-shard-licorice.glitch.me/movies?genre=${genre}&page=${page}&limit=${limit}`,
				);
				console.log(response, "movies page");
				if (response.data.movies.length == 0) {
					setHasMore(false);
				}
				setMovies([...movies, ...response.data.movies]);

				setPage(response.data.currentPage);
				setLoading(false);
			} catch (err) {
				console.log(err);
				setError(err.response.data.message);
				setLoading(false);
			}
		};
		fetchMovies();
	}, [genre, page]);
	// console.log(movies)
	// dynamic routing for each movie
	const handleViewMore = (id) => {
		navigate(`/movies/${id}`);
	};

	// delete the movie
	const handleDelete = async (id) => {
		try {
			const response = await axios.delete(
				`https://frill-shard-licorice.glitch.me/movies/${id}`,
			);
			setMovies(movies.filter((movie) => movie.id !== id));
		} catch (err) {
			alert("failed to delete movie");
		}
	};
	// pagination controls

	console.log(genre);
	if (error) return <p className="error">{error}</p>;
	return (
		<div className="movies-container">
			<h1>Movie Explorer</h1>
			<button className="add-movie-btn" onClick={() => navigate("/add-movie")}>
				Add Movie
			</button>
			{/* <button></button> */}
			<div className="filter-section">
				<select
					name="genre"
					value={genre}
					onChange={(e) => setGenre(e.target.value)}
				>
					<option value="">All</option>
					<option value="Action">Action</option>
					<option value="Crime">Crime</option>{" "}
					<option value="Drama">Drama</option>
					<option value="Sci-Fi">Sci-Fi</option>
				</select>
			</div>
			<InfiniteScroll
				dataLength={movies.length}
				next={() => setPage((prev) => prev + 1)}
				hasMore={hasMore}
				loader={<h1>Loading more movies...</h1>}
				endMessage={
					<p style={{ textAlign: "center" }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				<div className="movies-list">
					{movies.length > 0 &&
						movies.map((movie) => (
							<div key={movie.data} className="movie-card">
								<img
									src={movie.poster}
									alt={movie.name}
									className="movie-poster"
								/>
								<h3 className="movie-title">{movie.title}</h3>
								<h3>Genre : {movie.genre}</h3>
								<p>Release Date : {movie.releaseDate}</p>
								<div className="movie-actions">
									<button
										className="edit-btn"
										onClick={() => navigate(`/edit-movie/${movie.id}`)}
									>
										Edit
									</button>
									<button
										className="delete-btn"
										onClick={() => handleDelete(movie.id)}
									>
										Delete
									</button>
									<button
										className="view-more-btn"
										onClick={() => handleViewMore(movie.id)}
									>
										View more..
									</button>
								</div>
							</div>
						))}
				</div>
			</InfiniteScroll>
		</div>
	);
};

export default MovieScroller;

// https://frill-shard-licorice.glitch.me/movies
