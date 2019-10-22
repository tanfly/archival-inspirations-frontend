import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'

const Login = ({ loginForm, updateLoginForm, login, history }) => {
	//since props is an object we can destructure it

	const handleInputChange = event =>  {
		const { name, value } = event.target
		const updatedFormInfo = {
			...loginForm,
			[name]:value

		} 
		updateLoginForm(updatedFormInfo)
		//passing the object into a function that came from imported action
	
	}

	const handleSubmit = event => {
		event.preventDefault()
		login(loginForm, history)


	}
	return (
		<form onSubmit={handleSubmit}>
		<input 
		type="text"
		name="username"
		value={loginForm.username}
		placeholder="username"
		onChange={handleInputChange}
		/>
		<input 
		type="password"
		name="password"
		value={loginForm.password}
		placeholder="password"
		onChange={handleInputChange}
		/>
		<input type="submit" value="Log In"/>
		</form>

		)
}
//gives us props that we can pass as arg into this component
const mapStateToProps = state => {
	return {
		loginForm: state.loginForm
		//getting the whole object instead of separate keys/values
	}
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)

//updateLoginForm, login mapDispatchToProps passed as object