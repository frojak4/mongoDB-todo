
import React from 'react'
import DeleteForm from './DeleteForm'

type ToDoItemProps = {
    todo: {
        task: string
        completed: boolean
        id: string
    }
}


const ToDoItem = ({ todo }: ToDoItemProps) => {

    return (
        <div className="text-2xl mx-auto w-2/6 text-white p-6 m-2 text-start bg-gray-500 flex">
            <h3 className="flex-1 truncate">
                {todo.task}
            </h3>
            <DeleteForm id={todo.id} />
        </div>
    )
}

export default ToDoItem