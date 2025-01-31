import React from "react";

const Wishlist = (props) => {
	console.log(props.bookData);
	if (props.bookData.length == 0) {
		return <div>No Books in the list</div>;
	}
	return (
		<>
			{props.bookData.map((book) => {
				return (
					<div className="book-card">
						<img src={book.coverImage} alt={book.name} />
						<h3>{book.name}</h3>
						<p>Category:{book.category}</p>
						<p>Price : {book.price}</p>
						<button onClick={() => props.handleRemoveFromWishlist(book.id)}>
							Remove From Wishlist
						</button>
					</div>
				);
			})}
		</>
	);
};

export default Wishlist;
