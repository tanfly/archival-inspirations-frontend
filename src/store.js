import { createStore, applyMiddleware, combineReducers, compose } from 'redux' 
import usersReducer from './reducers/users'
import loginForm from './reducers/loginForm'
import currentUser from './reducers/currentUser'
import  thunk  from 'redux-thunk'
import myPosts from './reducers/myPosts'
import signupForm from './reducers/signupForm'
import newPost from './reducers/newPost'

const reducer = combineReducers({
	users: usersReducer,
	currentUser,
    loginForm,
	myPosts,
	signupForm,
	newPost
	})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store