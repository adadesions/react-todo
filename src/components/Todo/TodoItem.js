import React from 'react'
import './Todo.css'

const TodoItem = ({ id, task, removeTask }) => {
    return (
        <div className="row todo-item">
            <div className="col-10">
                <p>
                    {task}
                </p>
            </div>
            <div className="col-2">
                <span className="delete-btn" onClick={() => removeTask(id)}>
                    <i class="far fa-times-circle delete-icon-btn"></i>
                </span>
            </div>
        </div>
    )
}

export default TodoItem