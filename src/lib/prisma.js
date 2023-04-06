const prismaClient = require("@prisma/client");

const prisma = global.prisma || new prismaClient.PrismaClient();
global.prisma = prisma;

module.exports = prisma;
