'use client'
import { createTask } from '@/app/utils/actions';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom'
import { DeleteAllForm } from './DeleteAllForm';


const initialState = {
    message: null
}


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" className="disabled:text-gray-500 disabled:bg-green-950 bg-green-800 p-2 disabled:cursor-default" disabled={pending}>Add Task</button>
    )
}

const Input = () => {

    const [state, formAction] = useFormState(createTask, initialState)


    const [input, setInput] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    useEffect(() => {
        setInput('')
    }, [state])

    return (
        <div className="mb-6">
            <div className="flex justify-center">
                <form action={formAction}>
                    <input
                        className="text-gray-700 p-2"
                        required name="task"
                        value={input}
                        placeholder='Enter new todo'
                        onChange={(e) => handleInputChange(e)} />
                    <SubmitButton />
                </form >
                <DeleteAllForm />
            </div>
            <h3 className="text-red-500">{state?.message}</h3>


        </div>
    )
}

export default Input