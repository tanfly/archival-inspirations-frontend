import React from 'react'
import { Link } from 'react-router-dom'
import { favorite } from '../actions/favorite'



const PostCard = (post) => {
	console.log(post)

	
	return (

		post.post.attributes ?
		

		<div className="postCard">
		<h3>{post.post.attributes.title} - {post.post.attributes.time_period}</h3> <br/>
		<img src={post.post.attributes.photo} alt={post.post.attributes.title} width="500px" height="500px"/><br/>
		<button onClick={favorite(post.post)}>Favorite</button>
		<p>{post.post.attributes.description}</p>
		{post.post.relationships.user.data.id == post.currentUser.data.id ? <Link to={`/posts/${post.post.id}/edit`}>Edit Post</Link> : null}
		</div>
		:
		null
		)
}


export default PostCard