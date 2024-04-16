import pkg from '@prisma/client';

const { PrismaClient } = pkg;

export const prismaClient = new PrismaClient({
  log: [
    // { emit: "stdout", level: "query" },
    { emit: "stdout", level: "info" },
    // { emit: "stdout", level: "warn" },
    { emit: "stdout", level: "error" },
  ],
});
