export default (state = [], action) => {

	let index;
	let post;

	switch (action.type) {

		case "SET_MY_POSTS":
		  return action.posts.data
		case "ADD_POST":
			return state.concat(action.post);
		case "UPDATE_POST":
			return state.map(post => post.id === action.post.id ? action.post : post)
		case "DELETE_POST_SUCCESS":
			return state.filter(post => post.id === action.postId ? false:true)
		case "CLEAR_POSTS":
		  return []
		case "LIKE_POST":
			index = state.findIndex(post => post.id === action.postId);
			post = state[index];
			return[
				...state.slice(0, index),
				Object.assign({}, post, { likes: post.likes += 1}),
				...state.slice(index + 1)
			]
		case "UNLIKE_POST":
			index = state.findIndex(post => post.id === action.postId);
			post = state[index];
			if (post.likes > 0){
			return[
				...state.slice(0, index),
				Object.assign({}, post, { likes: post.likes -= 1}),
				...state.slice(index + 1)
			]
		}
		return state;

		default:
		  return state
	}
}