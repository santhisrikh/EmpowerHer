import React, { useRef } from "react";

const ImageCarousel = () => {
	const carouselRef = useRef();
	const inputRef = useRef();
	console.log(carouselRef);
	const handleScrollLeft = () => {
		console.log(carouselRef, "carousel div");
		carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
		// inputRef.current.style.backgroundColor = "red";
	};
	const handleScrollRight = () => {
		carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
	};
	return (
		<div>
			{/* <input type="text" ref={inputRef} placeholder="username" /> */}

			<div
				ref={carouselRef}
				style={{
					display: "flex",
					width: "200px",
					border: "2px solid black",
					overflow: "hidden",
				}}
			>
				<img
					src="https://placehold.co/600x400/orange/white"
					alt=""
					width={"200px"}
				/>
				<img
					src="https://placehold.co/600x400/green/white"
					width={"200px"}
					alt=""
				/>
				<img
					src="https://placehold.co/600x400/blue/white"
					width={"200px"}
					alt=""
				/>
			</div>
			<button onClick={handleScrollLeft}>ScrollLeft</button>
			<button onClick={handleScrollRight}>ScrollRight</button>
		</div>
	);
};

export default ImageCarousel;
