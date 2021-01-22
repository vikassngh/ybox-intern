import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import {Navbar} from "./app/Navbar";
import List from "./features/articles/List";
import Form from "./features/articles/Form";
import Post from "./features/articles/Posts";
// import {SinglePost} from "./features/articles/SinglePost";

function App() {
  return (
      <Router>
        <Navbar/>
        <div className="App">
          <Switch>
            <Route
                exact
                path="/"
                render={() => (
                    <React.Fragment>
                        <Form/>
                        <List/>
                        <Post/>
                    </React.Fragment>
                )}
            />
            <Route exact path="/posts/:postId"/>
            <Route exact path="/editPost/:postId"  />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
  )
}

export default App
