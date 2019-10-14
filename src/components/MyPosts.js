import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const MyPosts = props => {
	console.log(props.posts.data)
	const postCards = props.posts.data ? 
	props.posts.data.map( post => <Link to={`/posts/${post.id}`} key={post.id}>{post.attributes.title}<br/></Link>): "No posts at the moment"
	return postCards
}


const mapStateToProps = state => {
	return {
	posts: state.myPosts
}
}

export default connect(mapStateToProps)(MyPosts)