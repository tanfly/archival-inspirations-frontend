import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const MyPosts = props => {
	const postCards = props.posts.length > 0 ? 
	props.posts.map( post => <Link to={`/posts/${post.id}`} key={post.id}>{post.title}<br/></Link>) : "No posts yet"
	return postCards
	}


const mapStateToProps = state => {
	return {
	posts: state.myPosts
}
}

export default connect(mapStateToProps)(MyPosts)