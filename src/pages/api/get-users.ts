import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let result = await queryPrisma();
  res.status(200).json(result)
}

const queryPrisma = async () => {
  let result = queryDB();
  await prisma.$disconnect();
  return result;
  // ^^^ hacky way, not sure if it's good

  // correct way is below, not sure how to return data from .then statements
  // return queryDB()
  //   .then(async () => {
  //     await prisma.$disconnect()
  //     return;
  //   })
  //   .catch(async (e) => {
  //     console.error(e)
  //     await prisma.$disconnect()
  //     process.exit(1)
  //   });
  // return thing;
}

const queryDB = async () => {
  const allUsers = await prisma.user.findMany()
  return allUsers;
}


