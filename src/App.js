import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"
import Login from "./components/LoginForm"
import SignUp from "./components/SignUp"
import MyPosts from "./components/MyPosts"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Nav from "./components/Nav"
import PostCard from "./components/PostCard"
import NewPostFormWrapper from "./components/NewPostFormWrapper"
import EditFormWrapper from "./components/EditFormWrapper"


class App extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    const {loggedIn, allPosts} = this.props

    return (
      <header className="app-header">
        <div className="App">
          <Router>
            {loggedIn? <Nav/> : null}
            <img className="app-logo" src="" alt=""/><br/>
            <Switch>
            <Route exact path="/" render={()=> loggedIn ? <MyPosts /> : <Home />}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/my-posts" component={MyPosts}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/my-posts/new" component={NewPostFormWrapper}/>
            <Route exact path="/posts/:id"    render={props => {
              const post = allPosts.find((post) => post.id === parseInt(props.match.params.id));
                return <PostCard post={post} {...props}/>
              }}/>
            <Route exact path="/posts/:id/edit"    render={props => {
              const post = allPosts.find((post) => post.id === parseInt(props.match.params.id));
           // setFormDataForEdit(trip)
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
    allPosts: state.myPosts

  })
}


export default connect(mapStateToProps, {getCurrentUser})(App)
