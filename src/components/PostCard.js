import React from 'react'
import { Link } from 'react-router-dom'




const PostCard = ({post,currentUser, handleClick}) => {

	
	return (

		post ?
		

		<div className="postCard">
		<h3>{post.attributes.title} - {post.attributes.time_period}</h3> <br/>
		<img src={post.attributes.photo} alt={post.attributes.title} width="500px" height="500px"/><br/><br/>
		<img src="https://i.ibb.co/rs2s6sx/New-Project-4.png" alt="Favorite" width="30px" height="30px" onClick={event => handleClick(event)}/>{post.attributes.favorites.length}<br/>
		<p>{post.attributes.description}</p>
		{post.relationships.user.data.id == currentUser.data.id ? <Link to={`/posts/${post.id}/edit`}>Edit Post</Link> : null}
		</div>
		:
		null
		)
}


export default PostCard
