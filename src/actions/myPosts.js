import { resetNewForm } from './newPost'
//synchronous
export const setMyPosts = posts => {
	return {
		type: "SET_MY_POSTS",
		posts
	}
}


 export const clearPosts = () => {
  return {
    type: "CLEAR_POSTS"
  }
 }

 export const addPost = post => {
 	return {
 		type: "ADD_POST",
 		post
 	}
 }

  export const deletePostSuccess = postId => {
 	return {
 		type: "DELETE_POST_SUCCESS",
 		postId
 	}
 }

 export const updatePostSuccess = post => {
 	return {
 		type: "UPDATE_POST",
 		post
 	}
 }



//asynchronous 

export const getMyPosts = (userId) => {
	return dispatch => {
		return fetch(`http://localhost:3001/users/${userId}/posts`, {
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
				dispatch(setMyPosts(response))
			}
		})
		.catch(console.log)
	}
}

export const createPost = (postData, history) => {
	return dispatch => {
		const sendablePostData = {
			post: {
				photo: postData.photo,
				title: postData.title,
                description: postData.description,
                time_period: postData.time_period,
				favorites: postData.favorites,
                likes: postData.likes,
                user_id: postData.userId,
			}
		}
		return fetch("http://localhost:3001/posts", {
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(sendablePostData)
		})
		.then(response => response.json())
		.then(post => {
			if (post.error) {
				alert(post.error)
			} else{
			dispatch(addPost(post))
			dispatch(resetNewForm())
			history.push(`/posts/${post.id}`)
		}
		})
		.catch(console.log)
	}
}


export const updatePost = (postData, history) => {
	//this updateTrip is sending a fetch request
	return dispatch => {
		const sendablePostData = {
			post: {
				photo: postData.photo,
				title: postData.title,
                description: postData.description,
                time_period: postData.time_period,
                user_id: postData.userId,
			}
		}
		return fetch(`http://localhost:3001/posts/${postData.postId}`, {
			credentials: "include",
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(sendablePostData)
		})
		.then(response => response.json())
		.then(post => {
			if (post.error) {
				alert(post.error)
			} else{
			dispatch(updatePostSuccess(post))
			//this update will update the store
			// dispatch(resetNewForm()) --> we included componentWillUnmount in edit wrapper which resets the form. 
			history.push(`/posts/${post.id}`)
		}
		})
		.catch(console.log)
	}
}


export const deletePost = (postId, history) => {
	return dispatch => {
		return fetch(`http://localhost:3001/post/${postId}`, {
			credentials: "include",
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(response => response.json())
		.then(post => {
			if (post.error) {
				alert(post.error)
			} else{
			dispatch(deletePostSuccess(postId))
			//this update will update the store
			history.push("/my-posts")
		}
		})
		.catch(console.log)
	}
}
