'use client'

import { createTask } from '@/app/utils/utils';
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'


const initialState = {
    message: null
}


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" className="disabled:text-gray-500 bg-slate-900 p-2 m-2 disabled:cursor-default" disabled={pending}>Add Task</button>
    )
}

const Input = () => {

    const [state, formAction] = useFormState(createTask, initialState)

    return (
        <form action={formAction} className="flex-col">
            <div>
                <input className="text-gray-700" required name="task" placeholder='Enter new todo' />
                <SubmitButton />
            </div>
            {state?.message}
        </form >
    )
}

export default Input