import {
	ADD_COMMENT,
	CREATE_POST,
	FETCH_POSTS,
	LIKE_POST,
	UNLIKE_POST,
} from "../actions/postsActions";

const initState = { posts: [] };

export const postReducer = (state = initState, action) => {
	let updatedPosts;
	switch (action.type) {
		case FETCH_POSTS:
			return { ...state, posts: action.payload };
		case CREATE_POST:
			return { ...state, posts: [action.payload, ...state.posts] };

		case LIKE_POST:
			updatedPosts = state.posts.map((post) =>
				// oick the post you liked
				post.id === action.payload.postId
					? {
							...post,
							// updat ethe likes object with the userid as tru
							likes: { ...post.likes, [action.payload.userId]: true },
					  }
					: post,
			);
			return { ...state, posts: updatedPosts };
		case UNLIKE_POST:
			updatedPosts = state.posts.map((post) =>
				// oick the post you liked
				post.id === action.payload.postId
					? {
							...post,
							// updat ethe likes object with the userid as tru
							likes: { ...post.likes, [action.payload.userId]: false },
					  }
					: post,
			);
			return { ...state, posts: updatedPosts };

		case ADD_COMMENT:
			updatedPosts = state.posts.map((post) =>
				post.id == action.payload.postId
					? {
							...post,
							comments: [...(post.comments ?? []), action.payload.comment],
					  }
					: post,
			);
			return { ...state, posts: updatedPosts };

		default:
			return state;
	}
};
