import React from 'react'

function Todo(props) {

    const {todo} = props
    const {title, completed} = todo

    const completedClass = completed ? "done" : "undone"

  return (
    <div className={'todo' + completedClass}>
        <div className='title'>{title}</div>
    </div>
  )
}

export default Todo
