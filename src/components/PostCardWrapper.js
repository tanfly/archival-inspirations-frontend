import React, { Component } from 'react';
import { favorite } from "../actions/favorite"
import { unfavorite } from "../actions/favorite"
import { connect } from "react-redux"
import PostCard from "./PostCard"




class PostCardWrapper extends Component {
 
 
 handleClick = (event) => {
	 event.preventDefault();
	 console.log("clicked!")
	const {post, currentUser} = this.props
	console.log(post.id)
	let fave_status = currentUser.data.attributes.favorites.find(fave_post => fave_post.post_id === post.id) 
		console.log(typeof(fave_status))
		if (typeof fave_status !== 'undefined'){
			this.props.unfavorite(post)
		}
		else{
			this.props.favorite(post)
		}

	}



	render() {
		const { post, currentUser } = this.props
		console.log(currentUser)
	return <>
			<PostCard post={post} currentUser={currentUser} handleClick={this.handleClick}/>
			</>
        }
	};


export default connect(null, { favorite, unfavorite })(PostCardWrapper);