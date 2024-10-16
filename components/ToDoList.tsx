import React from 'react'
import ToDoItem from '@/components/ToDoItem';
import { PrismaClient } from '@prisma/client'
import { Suspense } from 'react';

const prisma = new PrismaClient();

const ToDoList = async () => {

    const data = await prisma.toDo.findMany();

    return (
        <div className="">
            {data.map((task, i) => {
                return (
                    <Suspense key={i} fallback={<p>Loading...</p>}>
                        <ToDoItem todo={task} key={i} />
                    </Suspense>
                )
            })}
        </div>

    )
}

export default ToDoList