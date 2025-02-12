import React, { useState } from 'react'

function Todo(props) {

    const { todo, toggleTodo, deleteTodo, editTodoTitle } = props

    const completedClass = todo.completed ? "completed" : "incomplete"

    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(todo.title)

    const handleChange = e => setTitle(e.target.value)


    const handleSubmit = (e) => {
        e.preventDefault()
        editTodoTitle(todo.id, title)
        setIsEditing(false)
    }

    return (
        <div className={`todo ` + completedClass}>

            {!isEditing
                ? <div>

                    <h3>{title}</h3>

                    <div className='status'>
                        {todo.completed ? <div>Completed</div> : <div>Incomplete</div>}
                    </div>

                    <button onClick={() => deleteTodo(todo.id)}>
                        Eliminar
                    </button>

                    <button onClick={() => toggleTodo(todo.id)}>
                        Toggle
                    </button>

                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>

                </div>
                : <form onSubmit={handleSubmit}>
                    <input type="text" value={title} onChange={handleChange} />
                    <button>Save Changes</button>
                </form>
            }

        </div>
    )
}

export default Todo