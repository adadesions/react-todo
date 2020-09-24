import React from 'react'

const TodoItem = ({ id, task, removeTask }) => {
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

export default TodoItem