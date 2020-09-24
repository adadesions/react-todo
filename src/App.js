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
      this.props.addTask(this.input.value)
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

const TodoItem = ({id, task, removeTask}) => {
  return (
    <div className="todo-item">
      <p>
        {task}
        <span className="deleteBtn" onClick={() => removeTask(id)}>
          X
        </span>
      </p>
    </div>
  )
}


const TodoList = ({tasks, removeTask}) => {
  let allTasks = []

  if (tasks.length > 0) {
    allTasks = tasks.map( t => {
      return <TodoItem
                key={t.id}
                id={t.id}
                task={t.task}
                removeTask={removeTask}
            />
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
    this.state = {
      data: [
        {id: 0, task: 'Today we\'re going to learn reactjs'},
        {id: 1, task: 'Tomorrow we have a test'},
        {id: 2, task: 'Let\'s find something to eat'},
      ]
    }

    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  addTask(task) {
    let id = this.state.data.length + 1
    let newTask = {id, task}

    this.state.data.push(newTask) // Locally
    this.setState({               // Globally, tell whole to update
      data: this.state.data
    })
  }

  removeTask(id) {
    const newTaskList = this.state.data.filter(
      d => {
        if (d.id !== id)
          return d
      }
    )

    this.setState({
      data: newTaskList
    })
  }

  render() {
    return (
      <div className="todo-container">
        <AppTitle text="Ada Todos App"/>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.data} removeTask={this.removeTask} />
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
