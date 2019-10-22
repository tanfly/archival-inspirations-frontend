export const addFavorite = (post) => {
	return {
		type: "ADD_FAVORITE",
		post: post
	}
} 

export const removeFavorite = (post) => {
	return {
		type: "REMOVE_FAVORITE",
		post: post
	}
}

export const favorite = (post) => {
	console.log("favorite here")
	return dispatch => {
		return fetch(`http://localhost:3001/posts/${post.id}/favorite`, {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(post)
		})
		.then(response => response.json())
		.then(response => {
			console.log("response here")
			if (response.error) {
				alert(response.error)
			} else {
				dispatch(addFavorite(response))
			}


		})
		.catch(console.log)
 	}
}

export const unfavorite = (post) => {
	console.log("unfavorite here")
	return (dispatch) => {
		return fetch(`http://localhost:3001/posts/${post.id}/favorite`, {
			method: "DELETE",
		})
		.then(response => {
			console.log("response here")
			if (response.error) {
				alert(response.error)
			} else {
				dispatch(removeFavorite(response))
			}


		})
		.catch(console.log)
 	}
}