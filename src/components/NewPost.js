import React from 'react';
import { updateNewPost } from '../actions/newPost'
import { connect } from 'react-redux'

const NewPost = ({ formData, updateNewPost, history, userId, post, handleSubmit, editMode}) => {

	const handleOnChange = event => {
		const { name, value } = event.target
		//updateNewPost(name, value)
		const enteredNewPost = {
			...formData,
			[name]:value

		}
		updateNewPost(enteredNewPost)
		//passing the object into a function that came from imported action
	
	}


  return (

    <form onSubmit={event => {
		event.preventDefault()
        handleSubmit(event, formData, userId, history)}}>
		{editMode ? <h3>{"Edit Post"}</h3> : <h3>{"Create New Post"}</h3>}
    	<input 
    	type="text"
    	name="photo"
        value={formData.photo}
    	onChange={handleOnChange}
    	placeholder="photo url"
    	/><br/>
    	<input 
    	type="text"
    	name="title"
    	onChange={handleOnChange}
    	value={formData.title}
    	placeholder="title"
    	/><br/>
    	<input 
    	type="text"
    	name="description"
    	onChange={handleOnChange}
    	value={formData.description}
    	placeholder="description"
    	/><br/>
        <input 
        type="text"
        name="time_period"
        onChange={handleOnChange}
        value={formData.time_period}
        placeholder="time period"
        /><br/>
    	<input type="submit" value={ editMode ? "Update" : "Add"}/>

    </form>
  );
};

const mapStateToProps = state => {
	const userId =  state.currentUser ? state.currentUser.data.id : ""
	return {
		formData: state.newPost,
        userId
	}
}

export default connect(mapStateToProps, {updateNewPost})(NewPost); 