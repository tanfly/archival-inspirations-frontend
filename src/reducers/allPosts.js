export default (state = [], action) => {

	switch (action.type) {

		case "SET_POSTS": 
      return action.posts.data
        
    default:
      return state   
  
  }
} 