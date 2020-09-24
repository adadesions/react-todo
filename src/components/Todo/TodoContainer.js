import React, { Component } from 'react'


// Dev Import
import TodoForm from './TodoForm'
import TodoList from './TodoList'

// Presentation Component, Stateless
const AppTitle = ({ text }) => {
    return (
        <h1>{text}</h1>
    )
}


// Container Component, Stateful
class TodoContainer extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            data: [
                { id: 0, task: 'Today we\'re going to learn reactjs' },
                { id: 1, task: 'Tomorrow we have a test' },
                { id: 2, task: 'Let\'s find something to eat' },
            ]
        }

        this.addTask = this.addTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }

    addTask(task) {
        let id = this.state.data.length + 1
        let newTask = { id, task }

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
                <AppTitle text="Ada Todos App" />
                <TodoForm addTask={this.addTask} />
                <TodoList tasks={this.state.data} removeTask={this.removeTask} />
            </div>
        );
    }
}

export default TodoContainer