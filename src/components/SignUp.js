import React from 'react'
import { connect } from 'react-redux'
import { updateSignUpForm } from '../actions/signupForm'
import { signup } from '../actions/currentUser'

const SignUp = ({ signupForm, updateSignUpForm, signup, history }) => {
	//since props is an object we can destructure it

	const handleMainInputChange = event =>  {
		const { name, value } = event.target
		const updatedFormInfo = {
			...signupForm,
			[name]:value

		}
		updateSignUpForm(updatedFormInfo)
		//passing the object into a function that came from imported action
	
	}
	

	const handleSubmit = event => {
		event.preventDefault()
		signup(signupForm, history)


	}
	return (
		<form onSubmit={handleSubmit}>
		<input 
		type="text"
		name="username"
		value={signupForm.username}
		placeholder="username"
		onChange={handleMainInputChange}
		/>
		<input 
		type="password"
		name="password"
		value={signupForm.password}
		placeholder="password"
		onChange={handleMainInputChange}
		/>
		<input 
		type="text"
		name="email"
		value={signupForm.email}
		placeholder="email"
		onChange={handleMainInputChange}
		/>
		<input 
		type="text"
		name="avatar"
		value={signupForm.avatar}
		placeholder="avatar url"
		onChange={handleMainInputChange}
		/>
		<input type="submit" value="Sign Up"/>
		</form>

		)
}
//gives us props that we can pass as arg into this component
const mapStateToProps = state => {
	return {
		signupForm: state.signupForm
		//getting the whole object instead of separate keys/values
	}
}

export default connect(mapStateToProps, {updateSignUpForm, signup })(SignUp)