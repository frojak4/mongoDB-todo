
import React from 'react'
import DeleteForm from './DeleteForm'
import { MotionDiv } from './MotionDiv'
import ToDoText from './ToDoText'
import { ToDoItemProps } from '@/app/utils/Types'


const ToDoItem = ({ todo }: ToDoItemProps) => {

    return (
        <MotionDiv
            initial={{ rotate: 45, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            className="text-2xl mx-auto w-2/6 text-white p-6 m-2 text-start border-2 border-black bg-cyan-900 flex">
            <ToDoText todo={todo} />
            <DeleteForm id={todo.id} />
        </MotionDiv>
    )
}

export default ToDoItem