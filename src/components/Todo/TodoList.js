import React from 'react'

import TodoItem from './TodoItem'

const TodoList = ({ tasks, removeTask }) => {
    let allTasks = []

    if (tasks.length > 0) {
        allTasks = tasks.map(t => {
            return <TodoItem
                key={t.id}
                id={t.id}
                task={t.task}
                removeTask={removeTask}
            />
        })
    }
    else {
        allTasks.push(<h2 key="0">No new task found, please add one!</h2>)
    }

    return (
        <div className="todo-list">
            {allTasks}
        </div>
    )
}

export default TodoList