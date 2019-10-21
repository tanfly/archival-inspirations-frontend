export const addFavorite = post => {
	return {
		type: "ADD_FAVORITE",
		post
	}
}

export const favorite = (post) => {
	return dispatch => {
		return fetch(`http://localhost:3001/posts/${post.id}/favorite`, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(response => response.json())
		.then(response => {
			console.log(response)
			if (response.error){
				alert(response.error)
			} else {
                console.log(response)
				dispatch(addFavorite(response))
			}
		})
		.catch(console.log)
	}
}