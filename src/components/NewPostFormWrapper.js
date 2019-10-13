import React from 'react';
import { createPost } from "../actions/myPosts"
import { connect } from "react-redux"
import NewPost from "./NewPost"



const NewPostFormWrapper = ({ history, createPost }) => {

	const handleSubmit = (event, formData, userId, history) => {

		event.preventDefault()
		createPost({
            ...formData,
            userId
        }, history)
	}
	return <NewPost history={history} handleSubmit={handleSubmit}/>
	};


export default connect(null, {createPost })(NewPostFormWrapper);