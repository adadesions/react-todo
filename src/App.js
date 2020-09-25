import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Developer Import
import TodoContainer from './components/Todo/TodoContainer'
import NavBar from './components/NavBar/NavBar'

const PrintApp = () => {
  return (
    <h1>Print App Page</h1>
  )
}

const Profile = ({ username }) => {
  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <h3>logged in by {username}</h3>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TodoContainer />
            </div>
            <div className="col">
              <Switch>
                <Route path="/printapp">
                  <PrintApp />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/">
                  <TodoContainer />
                </Route>
              </Switch>
            </div>
            <div className="col">
              <TodoContainer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
