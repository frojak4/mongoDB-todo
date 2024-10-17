import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
const prisma = new PrismaClient()

export const completeTask = async (TaskId: string) => {
    await prisma.toDo.update({
        where: {
            id: TaskId
        },
        data: {
            completed: true
        }
    })

    revalidatePath('/')
}