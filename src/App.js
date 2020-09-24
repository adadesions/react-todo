import React, {Component} from 'react';
import './App.css';


// Presentation Component, Stateless
const AppTitle = ({text}) => {
  return(
      <h1>{text}</h1>
  )
}

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleInputForm = this.handleInputForm.bind(this)
    this.handleClickBtn = this.handleClickBtn.bind(this)
  }

  handleInputForm(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleClickBtn() {
    if (this.input.value !== '') {
      this.setState({
        value: ''
      })
    }
  }

  render() {
    return (
      <div className="todo-form">
        <input 
          ref = {node => {this.input = node}}
          type="text"
          placeholder="Add your new task here!"
          value={this.state.value}
          onChange={this.handleInputForm}
        />
        <button 
          onClick={this.handleClickBtn}
        >+</button>
        <p>{this.state.value}</p> 
      </div>
    )
  }
}

const TodoItem = ({task}) => {
  return (
    <div className="todo-item">
      <p>
        {task}
        <span className="deleteBtn">
          X
        </span>
      </p>
    </div>
  )
}


const TodoList = ({tasks}) => {
  let allTasks = []

  if (tasks.length > 0) {
    allTasks = tasks.map( t => {
      return <TodoItem key={t.id} task={t.task} />
    })
  }
  else {
    allTasks.push(<h2>No new task found, please add one!</h2>)
  }

  return (
    <div className="todo-list">
      {allTasks}
    </div>
  )
}

// Container Component, Stateful
class TodoContainer extends Component {
  constructor(prop) {
    super(prop)
  }

  render() {
    const mockData = [
    {id: 0, task: 'Today we\'re going to learn reactjs'},
    {id: 1, task: 'Tomorrow we have a test'},
    {id: 2, task: 'Let\'s find something to eat'},
  ]

    return (
      <div className="todo-container">
        <AppTitle text="Ada Todos App"/>
        <TodoForm />
        <TodoList tasks={mockData} />
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <TodoContainer />
    </div>
  );
}

export default App;
