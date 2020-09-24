import React from 'react';
import './App.css';

// Developer Import
import TodoContainer from './components/Todo/TodoContainer'

function App() {
  return (
    <div className="container">
      <div className="row">
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
