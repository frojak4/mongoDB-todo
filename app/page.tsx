
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function Home() {

  await prisma.toDo.create({
    data: {
      task: 'Go die',
      completed: true
    }
  })


  await prisma.toDo.updateMany({
    where: {
      task: 'Go die'
    },
    data: {
      task: 'Dont die'
    }
  })

  const test = await prisma.toDo.findMany()

  console.log(test)

  return (
    <div>

    </div>
  );
}
