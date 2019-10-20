export default (state = [], action) => {

	switch (action.type) {

		case "SET_POSTS":
            console.log(action.posts)
          return action.posts.data
        
        default:
            return state   
    }
} 