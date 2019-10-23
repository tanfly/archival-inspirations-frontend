import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const MyFavorites = props => {
    console.log("posts", props.posts)
    console.log("user", props.user)
    console.log("favorites", props.favorites)

    let match = props.posts.map(post=>{
        props.favorites.find(post_id => post_id === post.id)
        return post
    })

    console.log("match", match)
    

	const favoriteCards = props.favorites ?
    match.map( post => <Link to={`/posts/${post.id}`} key={post.id}> {post.attributes.title}<br/></Link>): "No favorites at the moment"
	return favoriteCards
}


const mapStateToProps = state => {
	return {
    favorites: state.myFavorites,
    posts: state.allPosts,
    user: state.currentUser
}
}

export default connect(mapStateToProps)(MyFavorites)