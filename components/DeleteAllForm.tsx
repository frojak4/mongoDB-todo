'use client'
import { deleteAllTasks } from '@/app/utils/actions'
import React from 'react'
import { useFormStatus } from 'react-dom'


const DeleteAllButton = () => {
    const { pending } = useFormStatus();
    return (
        <button className="bg-red-800 disabled:bg-red-950 p-2" disabled={pending} type="submit">Delete All</button>
    )
}

export const DeleteAllForm = () => {




    return (
        <form action={deleteAllTasks}>
            <DeleteAllButton />
        </form>
    )
}
