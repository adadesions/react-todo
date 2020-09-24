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
  }

  handleInputForm(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSomething(val) {
    console.log(val)
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
          onClick={() => this.handleSomething('สมชาย')}
        >+</button>
        <p>{this.state.value}</p> 
      </div>
    )
  }
}


// Container Component, Stateful 
function App() {
  return (
    <div className="App">
      <AppTitle text="Ada Todos App"/>
      <TodoForm />
    </div>
  );
}

export default App;
