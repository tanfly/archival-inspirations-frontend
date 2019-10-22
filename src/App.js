import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"
import Login from "./components/LoginForm"
import SignUp from "./components/SignUp"
import AllPosts from "./components/AllPosts"
import MyPosts from "./components/MyPosts"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Nav from "./components/Nav"
import PostCardWrapper from "./components/PostCardWrapper"
import NewPostFormWrapper from "./components/NewPostFormWrapper"
import EditFormWrapper from "./components/EditFormWrapper"


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }


  render(){
    const {loggedIn, currentUser, allPosts, myPosts} = this.props


    return (
      <header className="app-header">
        <div className="App">
          <Router>
            {loggedIn? <Nav/> : null}
            <img className="app-logo" src="" alt=""/><br/>
            <Switch>
            <Route exact path="/" render={()=> loggedIn ? <MyPosts /> : <Home />}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/all-posts" component={AllPosts}/>
            <Route exact path="/my-posts" component={MyPosts}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/my-posts/new" component={NewPostFormWrapper}/>
            <Route exact path="/posts/:id" render={props => {
              const post = allPosts ? allPosts.find((post => post.id == parseInt(props.match.params.id))) : "Loading"
              console.log(currentUser)
              return <PostCardWrapper post={post} currentUser={currentUser} {...props}/>
           }} />
            <Route exact path="/posts/:id/edit"    render={props => {
             const post = myPosts ? myPosts.find((post => post.id == parseInt(props.match.params.id))) : "Loading"
              return <EditFormWrapper post={post} {...props}/>
              }}/>
            </Switch>
          </Router>
        </div> 
      </header>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    currentUser: state.currentUser, 
    myPosts: state.myPosts,
    allPosts: state.allPosts,
  })
}


export default connect(mapStateToProps, {getCurrentUser})(App)
