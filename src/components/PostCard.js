import React from 'react'
import { Link } from 'react-router-dom'


const PostCard = (post) => {

	
	return (

		post.post.attributes ?
		

		<div className="postCard">
		<h3>{post.post.attributes.title} - {post.post.attributes.time_period}</h3> <br/>
		<img src={post.post.attributes.photo} alt={post.post.attributes.title} width="500px" height="500px"/><br/>
		<p>{post.post.attributes.description}</p>
		<Link to={`/posts/${post.post.id}/edit`}>Edit Post</Link></div> :
		null
		)
}

export default PostCard