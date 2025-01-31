import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Books.css";
import Wishlist from "./Wishlist";

const Books = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [sortBooks, setSortBooks] = useState("");
	const [category, setCategory] = useState("");
	const [page, setPage] = useState(1);
	const [wishList, setWishList] = useState([]);
	const [showWishList, setShowWishlist] = useState(false);
	const limit = 5;
	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await axios.get(
					`https://peppermint-carnelian-captain.glitch.me/books?sort=${sortBooks}&category=${category}&page=${page}&limit=${limit}`,
				);
				console.log(response.data.books);
				setBooks(response.data.books);
				setLoading(false);
			} catch (err) {
				setLoading(false);
				alert("failed to get the books");
			}
		};
		fetchBooks();
	}, [sortBooks, category, page]);
	const handleRemove = (bookId) => {
		let updatedWishlist = wishList.filter((book) => book.id !== bookId);
		setWishList(updatedWishlist);
	};
	const handleAddToWishlist = (book) => {
		let alreadyAdded = wishList.find((item) => item.id == book.id);
		if (!alreadyAdded) {
			setWishList([...wishList, book]);
		}
	};
	if (loading) return <h1>Loading...</h1>;
	return (
		<>
			<button onClick={() => setShowWishlist(!showWishList)}>
				{showWishList ? "Hide WishList" : "Show WishList"}
			</button>
			{showWishList && (
				<Wishlist bookData={wishList} handleRemoveFromWishlist={handleRemove} />
			)}
			<div>
				{/* sort Filtering */}
				<select
					name=""
					id=""
					value={sortBooks}
					onChange={(e) => {
						setSortBooks(e.target.value);
					}}
				>
					<option value="" disabled>
						---Select----
					</option>
					<option value="name_asc">Sort By name</option>
					<option value="price_asc">Sort Price Asc</option>
					<option value="price_desc">Sort Price Desc</option>
				</select>
				{/* Filter By category */}

				<select
					name=""
					id=""
					value={category}
					onChange={(e) => {
						setCategory(e.target.value);
					}}
				>
					<option value="" disabled>
						--select category--
					</option>
					{/* {["Fiction", "Business", "Psychology", "Finance", "Technology"].map(
						(ele) => {
							return (
								<option value={ele} id={ele}>
									{ele}
								</option>
							);
						},
					)} */}
					<option value="Fiction">Fiction</option>
					<option value="Finance">Finance</option>
				</select>
			</div>
			<div className="books-container">
				{books.length > 0 &&
					books.map((book) => {
						return (
							<div className="book-card">
								<img src={book.coverImage} alt={book.name} />
								<h3>{book.name}</h3>
								<p>Category:{book.category}</p>
								<p>Price : {book.price}</p>
								<button onClick={() => handleAddToWishlist(book)}>
									{wishList.find((ele) => ele.id == book.id)
										? "Added"
										: "Add to WishList"}
								</button>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default Books;
