export default (state = [], action) => {

	switch (action.type) {

    case "ADD_FAVORITE": 
      console.log(action.post.data) 
      return action.post.data
    case "REMOVE_FAVORITE":
      const index = state.findIndex(favorite => favorite.id == action.favoriteId);
        const removedFavoriteObject = [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ];
        return removedFavoriteObject   
    default:
      return state   
  
  }
} 