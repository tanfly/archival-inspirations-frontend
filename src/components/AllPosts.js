import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



const AllPosts = props => {
	console.log(props)
	const postCards = props.posts ?
	props.posts.map( post => <Link to={`/posts/${post.id}`} key={post.id}>{post.attributes.title}<br/></Link>): "No posts at the moment"
	return postCards
}


const mapStateToProps = state => {
	return {
	posts: state.allPosts
}
}

export default connect(mapStateToProps)(AllPosts)