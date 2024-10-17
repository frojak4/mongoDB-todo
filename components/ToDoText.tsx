import React from 'react'
import { ToDoItemProps } from '@/app/utils/Types'
import { toggleComplete } from '@/app/utils/actions'

const ToDoText = ({ todo }: ToDoItemProps) => {
    return (
        <form className="flex-1 truncate" action={toggleComplete}>
            <input type="hidden" value={todo.id} name="id" />
            <button className={`truncate ${todo.completed ? 'line-through' : ''}`}>

                {todo.task}

            </button>
        </form>
    )
}

export default ToDoText