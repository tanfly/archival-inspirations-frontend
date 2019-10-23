export default (state = [], action) => {

	switch (action.type) {

        case "SET_MY_FAVORITES": 
        console.log(action.userData.data.attributes.favorites)
        return action.userData.data.attributes.favorites
        
    default:
      return state   
  
  }
} 