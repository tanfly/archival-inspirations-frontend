import { resetLoginForm } from "./loginForm"
import { getMyPosts } from "./myPosts"
import { resetSignUpForm } from "./signupForm"
import { clearPosts } from "./myPosts"
import { getPosts } from "./allPosts"





 export const setCurrentUser = user => {
 	return {
 		type: "SET_CURRENT_USER",
     user
 	}
 }

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
				dispatch(setCurrentUser(user))
        dispatch(getMyPosts(user.data.id))
        dispatch(getPosts())
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
        dispatch(setCurrentUser(user))
        dispatch(getMyPosts(user.data.id))
        dispatch(resetSignUpForm())
        dispatch(getPosts())
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
        dispatch(setCurrentUser(user))
        dispatch(getMyPosts(user.data.id))
        dispatch(getPosts())
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

 