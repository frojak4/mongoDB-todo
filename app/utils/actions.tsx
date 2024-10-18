'use server'
import { revalidatePath } from "next/cache"
import { z } from 'zod'
import { prisma } from './prisma'


export const createTask = async (prevState: { message: string | null }, formData: FormData) => {


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

    return { message: null }
}

export const deleteTask = async (prevState: { message: string | null }, formData: FormData) => {
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

export const deleteAllTasks = async () => {
    console.log('delete');
    await prisma.toDo.deleteMany({});
    revalidatePath('/');
    return
}

export const toggleComplete = async (formData: FormData) => {

    const schema = z.object({ id: z.string() })

    const validated = schema.safeParse({ id: formData.get('id') })

    if (!validated.success) { return }

    const todo = await prisma.toDo.findFirst({
        where: {
            id: validated.data.id
        }
    })
    if (!todo) { return }
    await prisma.toDo.update({
        where: {
            id: validated.data.id
        },
        data:
        {
            completed: !todo.completed
        }
    })



    revalidatePath('/');
}