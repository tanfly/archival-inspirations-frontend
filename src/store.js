import { createStore, applyMiddleware, combineReducers, compose } from 'redux' 
import usersReducer from './reducers/users'
import loginForm from './reducers/loginForm'
import currentUser from './reducers/currentUser'
import  thunk  from 'redux-thunk'
import myPosts from './reducers/myPosts'
import allPosts from './reducers/allPosts'
import signupForm from './reducers/signupForm'
import newPost from './reducers/newPost'
import favorite from './reducers/favorite'

const reducer = combineReducers({
	users: usersReducer,
	currentUser,
    loginForm,
	myPosts,
	allPosts,
	signupForm,
	newPost,
	favorite
	})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store