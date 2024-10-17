'use client'
import { deleteTask } from '@/app/utils/actions'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { MdDelete } from "react-icons/md";

const initialState = {
    message: null
}

const DeleteButton = () => {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} className="disabled:text-teal-800 text-teal-400"><MdDelete /></button>
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