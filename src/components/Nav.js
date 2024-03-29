import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import { NavLink } from 'react-router-dom'


const Nav = ({currentUser, loggedIn}) => {
	return (
		<div className="nav">
		<NavLink exact className="activeClass" to="/my-favorites">My Favorites</NavLink>
		<NavLink exact className="activeClass" to="/all-posts">All Posts</NavLink>
		<NavLink exact className="activeClass" to="/my-posts">My Posts  </NavLink>
		<NavLink exact className="activeClass" to="/my-posts/new">New Post  </NavLink>
		{ loggedIn ? <Logout/> : null} 	
		 <h2>Welcome, {currentUser.data.attributes.username}!</h2>
		</div>
		)
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(Nav)

