export default (state = [], action) => {

	switch (action.type) {

    case "ADD_FAVORITE": 
        console.log(action)
      return action.post.data
        
    default:
      return state   
  
  }
} 