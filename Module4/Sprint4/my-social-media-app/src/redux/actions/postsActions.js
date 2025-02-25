import axios from "axios";

const FIREBASE_URL = `https://react-redux-social-media-95810-default-rtdb.firebaseio.com/posts.json`;
// action constnts
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
// fetch posts
export const fetchPosts = () => async (dispatch) => {
	try {
		const response = await axios.get(FIREBASE_URL);
		const data = response.data;
		const posts = data
			? Object.entries(data).map(([id, val]) => ({
					id,
					...val,
					comments: val.comments ?? [],
			  }))
			: [];
		dispatch({ type: FETCH_POSTS, payload: posts });
	} catch (error) {
		console.error("Error Fetching Posts", error);
	}
};

export const createPost = (postData) => async (dispatch) => {
	try {
		const response = axios.post(FIREBASE_URL, {
			...postData,
			likes: {},
			comments: {},
		});
		dispatch({
			type: CREATE_POST,
			payload: { id: (await response).data.name, ...postData },
		});
	} catch (error) {
		console.error("Error creating post", error);
	}
};

// like aPI call
export const likePost = (postId, userId) => async (dispatch) => {
	try {
		await axios.patch(
			`https://react-redux-social-media-95810-default-rtdb.firebaseio.com/posts/${postId}/likes.json`,
			{
				// [userId]: true,
				[userId]: true,
			},
		);
		dispatch({ type: LIKE_POST, payload: { postId, userId } });
	} catch (error) {
		console.error("Error liking post", error);
	}
};

export const unlikePost = (postId, userId) => async (dispatch) => {
	try {
		await axios.patch(
			`https://react-redux-social-media-95810-default-rtdb.firebaseio.com/posts/${postId}/likes.json`,
			{
				// [userId]: true,
				[userId]: false,
			},
		);
		dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
	} catch (error) {
		console.error("Error liking post", error);
	}
};

export const addComment = (postId, email, commentText) => async (dispatch) => {
	console.log(postId, email, commentText, "in actions");
	try {
		const response = await axios.post(
			`https://react-redux-social-media-95810-default-rtdb.firebaseio.com/posts/${postId}/comments.json`,
			{
				commenterEmail: email,
				text: commentText,
				timeStamp: Date.now(),
			},
		);
		console.log(response.data, "data in actions");
		dispatch({
			type: ADD_COMMENT,
			payload: {
				postId,
				comment: {
					id: response.data.name,
					commenterEmail: email,
					text: commentText,
				},
			},
		});
	} catch (error) {
		console.error("Error commenting the post", error);
	}
};

// [name]:value
