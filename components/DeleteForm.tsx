'use client'
import { deleteTask } from '@/app/utils/utils'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
    message: null
}

const DeleteButton = () => {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} className="disabled:text-gray-600">Delete</button>
    )
}

const DeleteForm = ({ id }: { id: string }) => {

    const [state, formAction] = useFormState(deleteTask, initialState)

    return (
        <form action={formAction}>
            <input type="hidden" value={id} name="id" />
            <DeleteButton />
        </form>
    )
}

export default DeleteForm