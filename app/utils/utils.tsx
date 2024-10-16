'use server'
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { z } from 'zod'
const prisma = new PrismaClient()


export const createTask = async (prevState: { message: string }, formData: FormData) => {


    const taskSchema = z.object({
        task: z.string({ message: 'Please enter a task' }).min(3, 'Must be at least 3 characters')
    })

    const validated = taskSchema.safeParse({ task: formData.get('task') })

    if (!validated.success) {
        return { message: validated.error.issues[0].message }
    }
    await prisma.toDo.create({
        data: {
            completed: false,
            task: validated.data.task
        }
    })
    revalidatePath('/');

    return { message: 'Successfully added task' }
}

export const deleteTask = async (prevState: { message: string }, formData: FormData) => {
    console.log('delete')
    const deleteSchema = z.object({
        id: z.string()
    })

    const validated = deleteSchema.safeParse({ id: formData.get('id') });

    if (!validated.success) {
        return { message: validated.error.issues[0].message }
    }

    await prisma.toDo.delete({
        where: {
            id: validated.data.id
        }
    })

    revalidatePath('/');

    return { message: 'success' }
}