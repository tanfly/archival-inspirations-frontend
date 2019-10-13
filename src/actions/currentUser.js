import { resetLoginForm } from "./loginForm"
import { getMyPosts } from "./myPosts"
import { resetSignUpForm } from "./signupForm"
import { clearPosts } from "./myPosts"





//synchronous action creators return plain JS objects
 export const setCurrentUser = user => {
 	return {
 		type: "SET_CURRENT_USER",
 		// payload: user (that's in the arg) or we can use shorthand:
     user
 	}
 }
//asynchronous action creators (thunk allows to use dispatch) that return FUNCTION and promise
//which as an argument receives. Happens before the synchronous action
 export const login = (credentials, history) => {
 	return dispatch =>{
		return fetch("http://localhost:3001/login",{
			credentials: "include",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(credentials)
		})
		.then(response => response.json())
		.then(user => {
			if (user.error) {
				alert(user.error)
			} else {
				// dispatch({type: "SET_CURRENT_USER", user: user}) but we have action creator above, so
				dispatch(setCurrentUser(user))
        dispatch(getMyPosts(user.data.id))
        dispatch(resetLoginForm())
        history.push("/")
			}


			})
		.catch(console.log)
 	}
 }

 export const signup = (credentials, history) => {
  return dispatch =>{
    return fetch("http://localhost:3001/signup",{
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
  //       // dispatch({type: "SET_CURRENT_USER", user: user}) but we have action creator above, so
        dispatch(setCurrentUser(user))
        dispatch(getMyPosts(user.data.id))
        dispatch(resetSignUpForm())
        history.push("/")
      }


      })
    .catch(console.log)
  }
 }




 export const getCurrentUser = () => {
  return dispatch =>{
    return fetch("http://localhost:3001/get_current_user",{
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        // dispatch({type: "SET_CURRENT_USER", user: user}) but we have action creator above, so
        dispatch(setCurrentUser(user))
        dispatch(getMyPosts(user.data.id))
      }


      })
    .catch(console.log)
  }
 }

//asynchronous
 export const logout = (history) => {
 	return dispatch => {
 		dispatch(clearCurrentUser())
    dispatch(clearPosts())
    history.push("/")
 		return fetch("http://localhost:3001/logout", {
 			credentials: "include",
 			method: "DELETE"
 		})
 	}
 }


 export const clearCurrentUser = () => {
 	return {
 		type: "CLEAR_CURRENT_USER"
 	}
 }

 