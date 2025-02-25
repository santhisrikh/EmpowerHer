import { Box, Button, Text, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { LuHeart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
	addComment,
	likePost,
	unlikePost,
} from "../redux/actions/postsActions";
const PostCard = ({ post }) => {
	const user = useSelector((state) => state.auth.user);
	const [commentText, setCommentText] = useState("");
	// likes : {"userId":true} likes
	// likes:{"userId":false} unlikes
	console.log(post.likes, "likes");
	const dispatch = useDispatch();
	const handleLikes = () => {
		// dispatch like action
		// dispatch unlike action
		// if the user already exists inside likes object
		if (post.likes?.[user?.uid]) {
			dispatch(unlikePost(post.id, user.uid));
		}
		dispatch(likePost(post.id, user.uid));
	};
	console.log(
		Object.values(post.likes || {}).filter((value) => value === true).length,
		"lenngth",
	);
	let likesCount = Object.values(post.likes || {}).filter(
		(userId) => userId === true,
	).length;
	const handleComment = () => {
		if (commentText.trim()) {
			dispatch(addComment(post.id, user.email, commentText));
		}
	};
	console.log(post.comments, "comments");
	return (
		<Box
			p={4}
			border={"1px solid gray"}
			borderRadius={"md"}
			w="50%"
			bg="gray.100"
		>
			<Text fontWeight={"bold"} color={"blue.400"}>
				{post.userEmail}
			</Text>
			<Text>{post.text}</Text>
			<Flex>
				<Button
					color={post.likes?.[user?.uid] ? "red" : "gray"}
					bg="transparent"
					onClick={handleLikes}
				>
					<FaHeart />
					{likesCount}
				</Button>
				<Input
					placeholder="Commennt Here"
					value={commentText}
					onChange={(e) => setCommentText(e.target.value)}
				/>
				<Button onClick={handleComment}>Comment</Button>
			</Flex>

			{post?.comments.length > 0 &&
				post?.comments.map((comment) => {
					return <Text>{comment.text}</Text>;
				})}
		</Box>
	);
};

export default PostCard;
