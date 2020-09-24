import React, { Component } from 'react'

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
                    ref={node => { this.input = node }}
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

export default TodoForm