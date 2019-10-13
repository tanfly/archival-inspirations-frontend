import React from 'react'
import { Link } from 'react-router-dom'


const PostCard = ({post}) => {
	
	return (

		post ?

		<div className="postCard">
		<h3>{post.title}</h3> <br/>
		<img src={post.photo} alt={post.title} width="500px" height="500px"/><br/><Link to={`/posts/${post.id}/edit`}>Edit Post</Link></div> :
		null
		)
}

export default PostCard