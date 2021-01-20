import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import {Navbar} from "./app/Navbar";
import BlogsView from "./features/posts/BlogsView";
import {AddPostForm} from "./features/posts/AddPostForm";

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
                        <BlogsView/>
                    </React.Fragment>
                )}
            />
              <Route
                  exact
                  path="/AddBlogs"
                  render={() => (
                      <React.Fragment>
                          <AddPostForm/>
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
