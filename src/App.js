import React from 'react';
import './App.css';

// Developer Import
import TodoContainer from './components/Todo/TodoContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <TodoContainer />
          </div>
          <div className="col">
            <TodoContainer style={{marginTop: '5em'}}/>
          </div>
          <div className="col">
            <TodoContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
