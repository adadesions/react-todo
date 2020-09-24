import React from 'react'

const TodoItem = ({ id, task, removeTask }) => {
    return (
        <div className="row todo-item">
            <div className="col-10">
                <p>
                    {task}
                </p>
            </div>
            <div className="col-2">
                <span className="deleteBtn" onClick={() => removeTask(id)}>
                    X
                </span>
            </div>
        </div>
    )
}

export default TodoItem