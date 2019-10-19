import React, { Component } from 'react';
import { setFormDataForEdit } from "../actions/newPost"
import { updatePost, deletePost } from "../actions/myPosts"
import { connect } from "react-redux"
import NewPost from "./NewPost"
import { resetNewForm } from "../actions/newPost"



class EditFormWrapper extends Component {
 

 componentDidMount(){
	 this.props.post && this.props.setFormDataForEdit(this.props.post.attributes)
	 console.log(this.props.post)
 }

 componentDidUpdate(prevProps){
 	this.props.post && !prevProps.post && this.props.setFormDataForEdit(this.props.post.attributes)
 }

 componentWillUnmount(){
 		console.log(this.props)
 		this.props.resetNewForm()
 }
 handleSubmit = (event, formData, userId) => {
 		const { updatePost, post, history } = this.props
		event.preventDefault()
		updatePost({
            ...formData,
            postId: post.id,
            userId
        }, history)
	}



	render() {
		const { history, deletePost, post } = this.props
		const postId = post ? post.id : null 
	return <>
			<NewPost editMode history={this.history} handleSubmit={this.handleSubmit}/>
			<button style={{color:"red"}}onClick={()=>deletePost(postId, history)}> Delete </button>
			</>
}
	};


export default connect(null, { updatePost, setFormDataForEdit, resetNewForm, deletePost })(EditFormWrapper);