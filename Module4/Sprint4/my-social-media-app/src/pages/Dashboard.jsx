import { Box, Text, VStack, Input, Button, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPosts } from "../redux/actions/postsActions";
import PostCard from "./PostCard";

const Dashboard = () => {
	const [postText, setPostText] = useState("");
	const user = useSelector((state) => state.auth.user);
	const posts = useSelector((state) => state.posts.posts);
	console.log(user, posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	const handlePost = () => {
		if (postText.trim()) {
			const postData = {
				text: postText,
				userEmail: user.email,
				userId: user.uid,
			};
			dispatch(createPost(postData));
		}
	};
	return (
		<>
			<VStack gap={4} p={5}>
				<HStack gap={4} borderRadius={"md"} w="50%">
					<Input
						placeholder="write a post here..."
						value={postText}
						onChange={(e) => setPostText(e.target.value)}
						size="md"
					/>
					<Button colorPalette={"blue"} onClick={handlePost}>
						Post
					</Button>
				</HStack>
				{posts.length > 0 &&
					posts.map((post) => {
						return <PostCard post={post} key={post.id} />;
					})}
			</VStack>
		</>
	);
};

export default Dashboard;
