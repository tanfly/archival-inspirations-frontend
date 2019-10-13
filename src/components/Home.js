import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import '../App.css';


const Home = ({currentUser}) => (
	<div>
	<h3>Welcome! Please <Link to="/signup" className="link">Sign Up</Link> or <Link to="/login" className="link">Log In</Link>!</h3>
	</div>
);



const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(Home)