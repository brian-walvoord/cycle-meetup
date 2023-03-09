import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
let randomstring = require("randomstring");

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let result = await queryPrisma();
  res.status(200).json(result)
}

const queryPrisma = async () => {
  let result = await queryDB()
  await prisma.$disconnect();
  return result;
  // .then(async () => {
  //   await prisma.$disconnect()
  // })
  // .catch(async (e) => {
  //   console.error(e)
  //   await prisma.$disconnect()
  //   process.exit(1)
  // })
}

const queryDB = async () => {
  await prisma.user.create({
    data: {
      name: `${randomstring.generate(6)}`,
      email: `${randomstring.generate(10)}@prisma.io`,
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })
  const allUsers = await prisma.user.findMany()
  return allUsers;
}