export const setPosts = posts => {
	return {
		type: "SET_POSTS",
		posts
	}
}

export const getPosts = () => {
	return dispatch => {
		return fetch(`http://localhost:3001/posts`, {
			credentials: "include",
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(response => response.json())
		.then(response => {
			if (response.error){
				alert(response.error)
			} else {
				dispatch(setPosts(response))
			}
		})
		.catch(console.log)
	}
}