export const updateNewPost = (formData) => {
	return {
		type: "UPDATE_NEWPOST_FORM",
		formData
	}
}

export const resetNewForm = () => {
	return {
		type: "RESET_NEWPOST_FORM"
	}
}

export const setFormDataForEdit = post => {
	console.log(post)
	const postData = {
		photo: post.photo,
		title: post.title,
        description: post.description, 
        likes: post.likes,
        favorites: post.favorites,
		time_period: post.time_period,
		user_id: post.userId
	}
	return {
	type: "SET_FORM_DATA_FOR_EDIT",
	postData
}
}