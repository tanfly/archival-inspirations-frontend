const initialState = {
	photo: "",
	title: "",
	description: "",
    likes: 0,
    time_period: "",
    favorites: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_NEWPOST_FORM":
		return action.formData

		case "RESET_NEWPOST_FORM":
		return initialState

		case "SET_FORM_DATA_FOR_EDIT":
		return action.postData
		
		default:
		  return state
	}
}